import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

import connectDB from "@/lib/mongodb";
import Event from '@/database/event.model';
import { parseArrayField } from "@/lib/helpers";

type CloudinaryUploadResult = {
	secure_url: string;
};


export async function POST(req: NextRequest) {
	try {
		await connectDB();

		const formData = await req.formData();

		// Plain key/value object from the submitted FormData (values are string | File)
		const eventInput: Record<string, FormDataEntryValue> = Object.fromEntries(
			formData.entries()
		);
		// Validate & read image
		const imageValue = formData.get("image");
		if (!(imageValue instanceof File)) {
			return NextResponse.json({ message: "Image file is required" }, { status: 400 });
		}


		// Upload image to Cloudinary
		const arrayBuffer = await imageValue.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const uploadResult = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
			cloudinary.uploader
				.upload_stream({ resource_type: "image", folder: "DevEvent" }, (error, result) => {
					if (error) return reject(error);
					if (!result?.secure_url) return reject(new Error("Cloudinary upload failed"));
					resolve({ secure_url: result.secure_url });
				})
				.end(buffer);
		});

		// Build final payload with correct types
		const eventPayload = {
			...eventInput,
			image: uploadResult.secure_url,
			tags: parseArrayField(formData.get("tags")),
			agenda: parseArrayField(formData.get("agenda")),
		};

		const createdEvent = await Event.create(eventPayload);

		return NextResponse.json(
			{ message: 'Event created successfully', event: createdEvent },
			{ status: 201 });
	} catch (e) {
		console.error('Event creation failed:', e);
		return NextResponse.json(
			{ message: 'Event Creation Failed', error: 'Unknown' },
			{ status: 500 })
	}
}

export async function GET() {
	try {
		await connectDB();
		const events = await Event.find().sort({ createdAt: -1 });
		return NextResponse.json({ message: 'Events fetched successfully', events }, { status: 200 });
	} catch (e) {
		console.error('Event fetching failed:', e);
		return NextResponse.json({
			message: 'Event fetching failed',
			...(process.env.NODE_ENV === "development" && {
				error: (e as Error).message,
			}),
		}, { status: 500 });
	}
}
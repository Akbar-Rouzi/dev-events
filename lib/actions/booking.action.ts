'use server';
import connectDB from "@/lib/mongodb";
import Booking from "@/database/booking.model";

type CreateBookingParams = {
    eventId: string;
    slug: string;
    email: string;
}

type CreateBookingResult = {
    success: boolean;
    message?: string;
}

export const createBooking = async ({eventId, slug: _slug, email}: CreateBookingParams) => {
    try {
        await connectDB();
        const normalizedEmail = email.trim().toLowerCase();

        if (!normalizedEmail) {
            return {
                success: false,
                message: 'Email is required.',
            } satisfies CreateBookingResult;
        }

        await Booking.create({eventId, email: normalizedEmail});
        return {success: true} satisfies CreateBookingResult;
    } catch (e) {
        if (typeof e === 'object' && e !== null && 'code' in e && (e as { code?: number }).code === 11000) {
            return {
                success: false,
                message: 'This email is already registered for this event.',
            } satisfies CreateBookingResult;
        }

        console.log('Create booking failed:', e);
        return {success: false, message: 'Unable to create booking right now. Please try again.'} satisfies CreateBookingResult;
    }
}
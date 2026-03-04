'use server';
import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";
import { IEvent } from "@/database/event.model";

interface getSimilarEventsBySlupParams {
    slug: string;
}
export const getSimilarEventsBySlug = async({slug}: getSimilarEventsBySlupParams) => {
    try {
        await connectDB();
        const event = await Event.findOne({slug});      
        return await Event.find({
            _id:{$ne: event?._id},
            tags: {$in: event?.tags}
        }).lean<IEvent[]>(); // <- plain JS objects typed as IEvent[]
    } catch (e) {
        return[];
    }
}
import type { EventFields } from "@/database";

export type EventFormValues = Omit<
    EventFields,
    'slug' | 'image' | 'tags' | 'agenda'
> & {
    image: File | null;
    tags: string;
    agenda: string;
};

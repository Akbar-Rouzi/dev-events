import Image from "next/image";

type EventDetailsItemProps = {
    icon: string;
    alt: string;
    label: string;
}

const EventDetailsItem = ({icon, alt, label} : EventDetailsItemProps) => (
    <div className="flex-row-gap-2 items-center">
        <Image src={icon} alt={alt} width={17} height={17} />
        <p>{label}</p>
    </div>
);

export default EventDetailsItem;
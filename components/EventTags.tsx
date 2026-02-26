const EventTags = ({tags}: {tags: string[] }) => (
    <div className="flex flex-row gap-1.5 flex-wrap">
        {tags.map((tag:string) =>(
            <div key={tag} className="pill">{tag}</div>
        ))}
    </div>
)

export default EventTags;
const EventAgenda = ({agendaItems}: {agendaItems: string[]}) => (
    <div className="agenda">
        <h2>Agenda</h2>
        <ul>
            {agendaItems.map((item:string, index:number) => (
                <li key={`${item}-${index}`}>{item}</li>
            ))}
        </ul>
    </div>
)

export default EventAgenda;
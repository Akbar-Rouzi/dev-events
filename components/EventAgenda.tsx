const EventAgenda = ({agendaItems}: {agendaItems: string[]}) => (
    <div className="agenda">
        <h2>Agenda</h2>
        <ul>
            {agendaItems.map((item:string) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
)

export default EventAgenda;
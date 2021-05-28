import style from '../../../styles/Home.module.css'
import eventlist_style from '../../../styles/EventList.module.css'

import Link from 'next/link'

function EventList({ events }) {
    return (
        <div className={style.container}>
            <Link href="/">
                <a>Go home</a>
            </Link>
            <div className={eventlist_style.list}>
                {events.map((event) => (
                    <div key={event.id} className={eventlist_style.event}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <span>{format_time(event.event_time)}</span>
                        <Link
                    as={`/events/${event.id}`}
                    href={`/events?id=${event.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

function format_time(event_time) {
    return new Date(event_time).toUTCString();
}

export default EventList

import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

function EventList({ events }) {
    return (
        <div className="event-list">
            <Link href="/">
                <a>Go home</a>
            </Link>
            <div className={styles.grid}>
                {events.map((event) => (
                    <div key={event.id} className={styles.card}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventList

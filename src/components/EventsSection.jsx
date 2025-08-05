

const events = [
    {
        id: 1,
        title: 'Yoga Workshop',
        date: '2024-07-10',
        description: 'Join us for a relaxing yoga session suitable for all levels.',
    },
    {
        id: 2,
        title: 'Meditation Retreat',
        date: '2024-07-15',
        description: 'A day of guided meditation and mindfulness practices.',
    },
    {
        id: 3,
        title: 'Community Gathering',
        date: '2024-07-20',
        description: 'Meet and connect with fellow members of our community.',
    },
];

const EventsSection = () => (
    <section>
        <h2>Upcoming Events</h2>
        <ul>
            {events.map(event => (
                <li key={event.id} style={{ marginBottom: '1.5rem' }}>
                    <h3>{event.title}</h3>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p>{event.description}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default EventsSection;
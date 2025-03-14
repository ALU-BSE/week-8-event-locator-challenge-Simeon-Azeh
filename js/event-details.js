
const eventsData = [
    {
        id: 1,
        title: "Summer Music Festival",
        category: "music",
        date: "2025-03-15",
        description: "Join us for an amazing night of live music featuring top artists. Experience multiple stages with various genres including rock, pop, jazz, and electronic music. Food vendors and merchandise will be available throughout the venue.",
        image: "../assets/images/concert.jpg",
        location: "Central Park, Main Stage",
        time: "18:00 - 23:00",
        price: "$50"
    },
    {
        id: 2,
        title: "City Marathon 2025",
        category: "sports",
        date: "2025-03-20",
        description: "Annual city marathon with prizes and entertainment.",
        image: "../assets/images/sports.jpg",
        location: "Downtown",
        time: "07:00",
        price: "$25"
    },
];

function getEventDetails() {
    // Get the event ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));

    // Find the event in our data
    const event = eventsData.find(e => e.id === eventId);
    
    if (!event) {
        showErrorMessage();
        return;
    }

    populateEventDetails(event);
}

function populateEventDetails(event) {
    // Update the page title
    document.title = `${event.title} - Event Locator`;

    // Populate event details
    document.getElementById('eventImage').src = event.image;
    document.getElementById('eventImage').alt = event.title;
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventCategory').textContent = event.category;
    document.getElementById('eventDate').textContent = new Date(event.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('eventDescription').textContent = event.description;
    document.getElementById('eventLocation').textContent = event.location;
    document.getElementById('eventTime').textContent = event.time;
    document.getElementById('eventPrice').textContent = event.price;

    // Add event listener for register button
    document.getElementById('registerButton').addEventListener('click', () => {
        alert('Registration feature coming soon!');
    });
}

function showErrorMessage() {
    const container = document.getElementById('eventDetails');
    container.innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            <h4 class="alert-heading">Event Not Found</h4>
            <p>Sorry, we couldn't find the event you're looking for.</p>
            <hr>
            <a href="events.html" class="btn btn-outline-danger">Back to Events</a>
        </div>
    `;
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', getEventDetails);
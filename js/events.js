// Sample events data (in real app, this would come from an API/database)
const eventsData = [
    {
        id: 1,
        title: "Summer Music Festival",
        category: "music",
        date: "2025-03-15",
        description: "Join us for an amazing night of live music featuring top artists.",
        image: "../assets/images/concert.jpg",
        location: "Central Park",
        time: "18:00",
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

function getSearchParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        query: urlParams.get('query')?.toLowerCase() || '',
        category: urlParams.get('category') || '',
        date: urlParams.get('date') || ''
    };
}

function filterEvents(events, searchParams) {
    return events.filter(event => {
        const matchesQuery = !searchParams.query || 
            event.title.toLowerCase().includes(searchParams.query) ||
            event.description.toLowerCase().includes(searchParams.query);
        
        const matchesCategory = !searchParams.category || 
            event.category === searchParams.category;
        
        const matchesDate = !searchParams.date || 
            event.date === searchParams.date;

        return matchesQuery && matchesCategory && matchesDate;
    });
}

function displayEvents(filteredEvents) {
    const eventsContainer = document.getElementById('eventsContainer');
    eventsContainer.innerHTML = '';

    if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = `
            <div class="col-12 text-center">
                <h3>No events found</h3>
                <p>Try adjusting your search criteria</p>
            </div>`;
        return;
    }

    filteredEvents.forEach(event => {
        const eventCard = `
            <div class="col-md-4 mb-4">
                <div class="card featured-event-card h-100">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${event.category}</span>
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.description}</p>
                        <p class="text-muted"><i class="bi bi-calendar"></i> ${event.date}</p>
                        <a href="event-details.html?id=${event.id}" class="btn btn-outline-primary">View Details</a>
                    </div>
                </div>
            </div>`;
        eventsContainer.innerHTML += eventCard;
    });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const searchParams = getSearchParams();
    const filteredEvents = filterEvents(eventsData, searchParams);
    displayEvents(filteredEvents);
});
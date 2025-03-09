document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const searchQuery = document.getElementById('searchInput').value;
        const category = document.getElementById('categoryFilter').value;
        const date = document.getElementById('dateFilter').value;
        
        // Here you'll add the logic to search for events
        // and redirect to the events page with the search parameters
        const searchParams = new URLSearchParams({
            query: searchQuery,
            category: category,
            date: date
        });
        
        window.location.href = `pages/events.html?${searchParams.toString()}`;
    });
});
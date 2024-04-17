// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the reference to the infinite list element
    const listElm = document.querySelector('#infinite-list');
    
    // Initialize a variable to keep track of the next item number
    let nextItem = 1;

    // Function to load more items into the list
    const loadMore = () => {
        // Loop to create 20 new list items
        for (let i = 0; i < 20; i++) {
            // Create a new list item element
            const item = document.createElement('li');
            // Add the 'item' class to the list item element
            item.className = 'item';
            // Set the text content of the list item to 'Item X', where X is the next item number
            item.textContent = `Item ${nextItem++}`;
            // Append the new list item to the infinite list
            listElm.appendChild(item);
        }
    };

    // Event listener for the scroll event on the infinite list
    listElm.addEventListener('scroll', () => {
        // Check if the user has scrolled to the bottom of the list
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
            // If the user has scrolled to the bottom, load more items
            loadMore();
        }
    });

    // Initially load some items into the list
    loadMore();
});

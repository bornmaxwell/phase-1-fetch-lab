function fetchBooks() {
  function renderBooks(books) {
    const bookList = document.getElementById('book-list'); // Assuming there is an element with this ID in the DOM
    books.forEach((book) => {
      const li = document.createElement('li');
      li.textContent = book.name; // Render the book title
      bookList.appendChild(li);
    });
  }
  
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  // Fetch data from the API
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse JSON data
    })
    .then((books) => {
      renderBooks(books); // Pass the data to renderBooks
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
    });
}

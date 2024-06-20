const articles = [
  {
      id: 1,
      title: "Septimus Heap Book One: Magyk",
      date: "July 5, 2022",
      description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      imgAlt: "Book cover for Septimus Heap 1",
      ages: "10-14",
      genre: "Fantasy",
      stars: "****"
  },
  {
      id: 2,
      title: "Magnus Chase Book One: Sword of Summer",
      date: "December 12, 2021",
      description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
      imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      imgAlt: "Book cover for Magnus Chase 1",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐"
  }
];

const articlesContainer = document.getElementById('articlesContainer');

articles.forEach(article => {
  const articleDiv = document.createElement('div');
  articleDiv.classList.add('article');

  articleDiv.innerHTML = `
        <div class="column1">
            <p><strong>Date:</strong> ${article.date}</p>
            <p><strong>Ages:</strong> ${article.ages}</p>
            <p><strong>Genre:</strong> ${article.genre}</p>
            <p><strong>Rating:</strong> ${article.stars}</p>
        </div>
        <div class="column2">
            <h2>${article.title}</h2>
            <img class="book-image" src="${article.imgSrc}" alt="${article.imgAlt}">
            <p><strong>Description:</strong> ${article.description}</p>
        </div>
    `;

  articlesContainer.appendChild(articleDiv);
});

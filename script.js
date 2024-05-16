function storeInput() {
    const myLibrary = [];

    const book = document.getElementById("book");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");


    function Book () {
        book.value;
        author.value;
        pages.value;
        read.value;
    }

  
    myLibrary.push(Book);

    myLibrary.forEach(() => {
        const card = document.createElement("div");
        const bookInfo = document.createElement('p');
            bookInfo.textContent = book.value;
        const authorInfo = document.createElement('p');
            authorInfo.textContent = author.value
        const pageInfo = document.createElement('p');
            pageInfo.textContent = pages.value;

        card.appendChild(bookInfo); 
        card.appendChild(authorInfo);
        card.appendChild(pageInfo);
        card.classList.add('card');
        document.getElementById("cardcontainer").appendChild(card);
    });
}
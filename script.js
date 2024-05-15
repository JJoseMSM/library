function storeInput() {
    const myLibrary = [];

    const book = document.getElementById("book");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");


    const book1 = book.value;
    const author1 = author.value;
    const pages1 = pages.value;
    const read1 = read.value;


    myLibrary.push(book1, author1, pages1, read1);

    myLibrary.forEach((myLibrary) => {
        const card = document.createElement("div");
        const bookInfo = document.createElement('h2');
            bookInfo.textContent = `${book1}`
        const authorInfo = document.createElement('h2');
            authorInfo.textContent = `${author1}`
        const pageInfo = document.createElement('h2');
            pageInfo.textContent = `${pages1}`    

        card.appendChild(bookInfo); 
        card.appendChild(authorInfo);
        card.appendChild(pageInfo);   
        card.classList.add('card');
        document.getElementById("cardcontainer").appendChild(card);
    });
}
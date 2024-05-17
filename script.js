const book = document.getElementById("book");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("addBook");
const form = document.getElementById("form1");
    
    

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const myLibrary = [];

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
    
            if(read.checked) {
                let readInfo = document.createElement('p');
                    readInfo.innerHTML = "Read";
                    card.appendChild(readInfo);
            } else {
                let readInfo = document.createElement('p');
                readInfo.innerHTML = "Not read";
                card.appendChild(readInfo);
            }
            
            card.classList.add('card');
            document.getElementById("cardcontainer").appendChild(card);
        });
    })

    

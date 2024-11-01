import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {


    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
           <h2 className="font-bold text-4xl text-center">Books</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
                books.map(book => <Book
                book={book}></Book>)
            }
           </div>
        </div>
    );
}

export default Books;
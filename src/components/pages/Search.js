import React, { useState, useRef } from "react";
import ResultContainer from "../ResultContainer";
import "../SearchForm/style.css";
import API from "../utils/API";
import BookSearch from "../utils/BookSearch";

function Search(){
    const [books, setBooks] = useState([]);
    const searchQuery = useRef();

    function searchBooks(e) {
        e.preventDefault();

        API.getBooksQuery(searchQuery.current.value)
            .then(res => {
                setBooks(res)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="searchForm">
                <h3>Book Search</h3>
                <form>
                    <div className="form-group">
                        <label>Book</label>
                        <input className="form-control" id="bookInput" placeholder="Search books" ref={searchQuery} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={searchBooks}>Submit</button>
                </form>
            </div>
            <BookSearch.Provider value={books}>
                <ResultContainer />
            </BookSearch.Provider>
        </div>

    );
}

export default Search
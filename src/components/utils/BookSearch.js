import React from "react";

const BookSearch = React.createContext({
    title: "",
    authors: [],
    description: "",
    image: "",
    link: ""
});

export default BookSearch;
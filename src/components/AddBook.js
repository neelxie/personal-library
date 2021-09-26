import React, { useState} from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  // const [pages, setPages] = useState("");
  const [rating, setRating] = useState("5");
  const addBookHandler = (e) => {
    e.preventDefault();
    // onSubmit({ title, author, pages, read });
    setTitle("");
    setAuthor("");
    // setPages("");

    setRating("");
  };
  return (
    <form className="add-book">
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          className="form-control"
          name="author"
          onChange={(e) => author(e.target.value)}
          value={author}
        />
      </div>
      {/* <div className="form-group">
        <label>Genre</label>
        <input
          className="form-control"
          name="genre"
          onChange={onChange}
          value={book.genre}
        />
      </div> */}
      <div className="form-group">
        <label>Rating</label>
        <input
          className="form-control"
          name="read"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          type="number"
          min="1"
          max="10"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={addBookHandler}>Add Book</button>
      </div>
    </form>
  );
};

export default AddBook;
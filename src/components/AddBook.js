import React, { useState} from "react";

const AddBook = ({ onSubmit, onChange, book }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          name="title"
          onChange={onChange}
          value={book.title}
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          className="form-control"
          name="author"
          onChange={onChange}
          value={book.author}
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          className="form-control"
          name="genre"
          onChange={onChange}
          value={book.genre}
        />
      </div>
      <div className="form-group">
        <label>Read</label>
        <input
          className="form-control"
          name="read"
          onChange={onChange}
          value={book.read}
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Add Book" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default AddBook;
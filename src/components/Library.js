import React from "react";
import { useSelector } from "react-redux";

const Library = () => {
  const deleteBookHandler = (id) => {
    // delete dispatch
  };
  const books = useSelector((state) => state.books.books);
  const bookTable = books.map((book) => (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.rating}</td>
      <td>
        <button className="delete" onClick={() => deleteBookHandler(book.id)}>
          x
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="library">
      <h2>Library</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
          <th></th>
        </tr>

        <tr>
          <td>The Hobbit</td>
          <td>J.R.R. Tolkien</td>
          <td>320</td>
          <td>
            <button className="delete" onClick={deleteBookHandler}>
              x
            </button>
          </td>
        </tr>
        <tr>
          <td>The Lord of the Rings</td>
          <td>J.R.R. Tolkien</td>
          <td>480</td>
          <td>
            <button className="delete" onClick={deleteBookHandler}>
              x
            </button>
          </td>
        </tr>
        <tr>
          <td>The Catcher in the Rye</td>
          <td>J.D. Salinger</td>
          <td>240</td>
          <td>
            <button className="delete" onClick={deleteBookHandler}>
              x
            </button>
          </td>
        </tr>
        <tr>
          <td>To Kill a Mockingbird</td>
          <td>Harper Lee</td>
          <td>320</td>
          <td>
            <button className="delete" onClick={deleteBookHandler}>
              x
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Library;

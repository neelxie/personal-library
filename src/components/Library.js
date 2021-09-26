import React from "react";

const Library = () => {
  const deleteBookHandler = (id) => {
    // delete dispatch
  };
  return (
    <div>
      <h1>Library</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default Library;

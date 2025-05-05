import { useState, useEffect } from "react";
import booksData from "../data/books";

function Update() {
  const id = "608f68ce-d099-41e5-9961-cdd673257eb2";
  const [book, setBook] = useState([]);
  useEffect(() => {
    const foundBook = booksData.find((book) => book._id === id);
    setBook(foundBook || {});
  }, [id]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleUpdateSubmission = (e) => {
    e.preventDefault();
    console.log("Form Submission Completed.");
    console.log("Title: ", title);
    console.log("Author: ", author);
    console.log("Publisher: ", publisher);
    console.log("Genre: ", genre);
    console.log("Number of Pages: ", pages);
    console.log(`Rating: ${rating} stars`);
    console.log("Synopsis: ", synopsis);
  };

  return (
    <div>
      Update
      <div className="main-container">
        <main>
          <h1>Update Comic</h1>
          <form className="form-f" onSubmit={handleUpdateSubmission}>
            <p className="form-p">
              <label className="form-l" for="title">
                Title:{" "}
              </label>
              <input
                className="form-i"
                type="text"
                name="title"
                id="title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </p>
            <p className="form-p">
              <label className="form-l" for="author">
                Author:{" "}
              </label>
              <input
                className="form-i"
                type="text"
                name="author"
                id="author"
                required
                onChange={(e) => setAuthor(e.target.value)}
              />
            </p>
            <p className="form-p">
              <label className="form-l" for="publisher">
                Publisher:
              </label>
              <select
                className="form-i"
                name="publisher"
                id="publisher"
                onChange={(e) => setPublisher(e.target.value)}
              >
                <option value="boombox">BOOM! Box</option>
                <option value="Harry N. Abrams">Harry N. Abrams</option>
                <option value="Icon Books">Icon Books</option>
                <option value="Image Comics">Image Comics</option>
                <option value="Marvel">Marvel</option>
                <option value="Simon & Schuster">Simon & Schuster</option>
                <option value="Top Shelf Productions">
                  Top Shelf Productions
                </option>
                <option value="VIZ Media LLC">VIZ Media LLC</option>
                <option value="default" selected>
                  publisher value stored in database
                </option>
              </select>
            </p>
            <p className="form-p">
              <label className="form-l" for="genre">
                Genre:{" "}
              </label>
              <input
                className="form-i"
                type="text"
                name="genre"
                id="genre"
                required
                onChange={(e) => setGenre(e.target.value)}
              />
            </p>

            <p className="form-p">
              <label className="form-l" for="pages">
                Number of pages:{" "}
              </label>
              <input
                className="form-i"
                type="number"
                name="pages"
                id="page"
                onChange={(e) => setPages(e.target.value)}
              />
            </p>

            <p className="form-p">
              <label className="form-l" for="rating">
                Rating
              </label>
              <input
                className="form-i"
                type="text"
                name="rating"
                id="rating"
                value="5"
                required
                onChange={(e) => setRating(e.target.value)}
              />
            </p>
            <p className="form-p">
              <label className="form-l" for="synopsis">
                Synopsis:{" "}
              </label>
              <textarea
                className="form-i"
                name="synopsis"
                id="synopsis"
                onChange={(e) => setSynopsis(e.target.value)}
              >
              </textarea>
            </p>
            <p className="text-center">
              <button type="submit" className="button-gold">
                SUBMIT
              </button>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Update;

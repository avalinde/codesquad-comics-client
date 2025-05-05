import { useState } from "react";
import books from "../data/books";

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleCreateSubmission = (e) => {
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
      Create
      <div className="mainContainer">
        <main>
          <h1>Create New Comic</h1>
          <form className="formF" onSubmit={handleCreateSubmission}>
            <p className="formP">
              <label className="formL" for="title">
                Title:{" "}
              </label>
              <input
                className="formI"
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </p>
            <p className="formP">
              <label className="formL" for="author">
                Author:
              </label>
              <input
                className="formI"
                type="text"
                name="author"
                id="author"
                placeholder="Author"
                required
                onChange={(e) => setAuthor(e.target.value)}
              />
            </p>
            <p className="formP">
              <label className="formL" for="publisher">
                Publisher:
              </label>
              <select
                className="formI"
                name="publisher"
                id="publisher"
                onChange={(e) => setPublisher(e.target.value)}
              >
                <option value="pleasechoose" selected disabled>
                  --Select--
                </option>
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
              </select>
            </p>
            <p className="formP">
              <label className="formL" for="genre">
                Genre:
              </label>
              <input
                className="formI"
                type="text"
                name="genre"
                id="genre"
                placeholder="Genre"
                required
                onChange={(e) => setGenre(e.target.value)}
              />
            </p>

            <p className="formP">
              <label className="formL" for="pages">
                Number of pages:{" "}
              </label>
              <input
                className="formI"
                type="number"
                name="pages"
                id="page"
                placeholder="Number of Pages"
                required
                onChange={(e) => setPages(e.target.value)}
              />
            </p>

            <p className="formP">
              <label className="formL" for="rating">
                Rating:
              </label>
              <input
                className="formI"
                type="text"
                name="rating"
                id="rating"
                required
                onChange={(e) => setRating(e.target.value)}
              />
            </p>
            <p className="formP">
              <label className="formL" for="synopsis">
                Synopsis:
              </label>
              <textarea
                className="formI"
                name="synopsis"
                id="synopsis"
                onChange={(e) => setSynopsis(e.target.value)}
              ></textarea>
            </p>
            <p className="textCenter">
              <button type="submit" className="buttonGold">
                SUBMIT
              </button>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Create;

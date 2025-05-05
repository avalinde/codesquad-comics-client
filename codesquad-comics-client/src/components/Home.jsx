import { useState, useEffect } from "react";
import booksData from "../data/books";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div>
      Home
      <div className="mainContainer">
        <main>
          <h2>COMPLETE COMIC COLLECTION</h2>
          {booksData.map((book) => (
            <div key={book._id}>
              <img
                className="homeComicCard"
                src={`images/${book.imageUrl}`}
                alt={`Cover of ${book.title}`}
              />
              <p>
                <em>{book.title}</em>
              </p>
              <a className="detailsLink" href="#">
                <p>Details</p>
              </a>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Home;

{
  /*
            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/fun-home.jpg"
                  alt="Cover of Fun Home by Alison Bechdel"
                />
              </a>
              <br />
              <em>Fun Home: A Family Tragicomic</em> <br />
              by Alison Bechdel <br />
              5 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>

            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/watchmen.jpg"
                  alt="Cover of Watchmen by Alan Moore"
                />
              </a>
              <br />
              <em>Watchmen</em> <br />
              by Alan Moore <br />
              5 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>

            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/hunter-x-hunter.jpg"
                  alt="Cover of Hunter x Hunter Vol1 by Yoshihiro Togashi"
                />
              </a>
              <br />
              <em>Hunter x Hunter Vol. 1</em> <br />
              by Yoshihiro Togashi <br />
              5 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>

            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/lumberjanes.jpg"
                  alt="Cover of LumberJanes Vol1 by Noelle Stevenson"
                />
              </a>
              <br />
              <em>Lumberjanes Vol. 1</em> <br />
              by Noelle Stevenson <br />
              4 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>
            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/one-piece.jpg"
                  alt="Cover of One Piece Vol. 1: Romance Dawn by Eiichiro Oda"
                />
              </a>
              <br />
              <em>One Piece, Vol. 1: Romance Dawn</em> <br />
              by Eiichiro Oda
              <br />
              5 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>
            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/wake.jpg"
                  alt="Cover of Wake by Rebecca Hall"
                />
              </a>
              <br />
              <em>Wake: The Hidden History of Women-Led Slave Revolts</em>{" "}
              <br />
              by Rebecca Hall
              <br />
              4 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>
            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/black-panther.jpg"
                  alt="Cover of Black Panther by Ta-Nehisi Coates"
                />
              </a>
              <br />
              <em>Black Panther: A Nation Under Our Feet Book 1</em> <br />
              by Ta-Nehisi Coates
              <br />
              3 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>

            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/the-walking-dead.jpg"
                  alt="Cover of The Walking Dead by Robert Kirkman"
                />
              </a>
              <br />
              <em>The Walking Dead, Vol. 1: Days Gone Bye</em> <br />
              by Robert Kirkman
              <br />
              4 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>

            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/batman.jpg"
                  alt="Cover of Batman by Frank Miller"
                />
              </a>
              <br />
              <em>Batman: The Dark Knight Returns</em> <br />
              by Frank Miller
              <br />
              3 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>

            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/queer.jpg"
                  alt="Cover of Queer: A Graphic History by Meg-John Barker"
                />
              </a>
              <br />
              <em>Queer: A Graphic History</em> <br />
              by Meg-John Barker
              <br />
              4 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>

            <p>
              <a href="#">
                <img
                  className="homeComicCard"
                  src="images/parable-of-the-sower.jpg"
                  alt="Cover of Parable of the Sower by Octavia E. Butler"
                />
              </a>
              <br />
              <em>Parable of the Sower</em> <br />
              by Octavia E. Butler
              <br />
              4 stars <br />
              <a className="detailsLink" href="#">
                Details
              </a>
            </p>
            <button className="buttonGold">DISPLAY MORE</button>
            */
}

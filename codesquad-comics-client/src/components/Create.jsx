function Create() {
  return (
    <div>
      Create
      <div className="mainContainer">
        <main>
          <h1>Create New Comic</h1>
          <form className="formF">
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
              />
            </p>
            <p className="formP">
              <label className="formL" for="publisher">
                Publisher:
              </label>
              <select className="formI" name="publisher" id="publisher">
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
              />
            </p>
            <p className="formP">
              <label className="formL" for="synopsis">
                Synopsis:
              </label>
              <textarea className="formI" name="synopsis" id="synopsis">
                
              </textarea>
            </p>
            <p className="textCenter">
              <button className="buttonGold">SUBMIT</button>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Create;

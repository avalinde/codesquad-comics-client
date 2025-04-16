function Update() {
  return (
    <div>
      Update
      <div className="main-container">
        <main>
          <h1>Update Comic</h1>
          <form className="form-f">
            <p className="form-p">
              <label className="form-l" for="title">
                Title:{" "}
              </label>
              <input
                className="form-i"
                type="text"
                name="title"
                id="title"
                value="title value stored in database"
                required
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
                value="author value stored in database"
                required
              />
            </p>
            <p className="form-p">
              <label className="form-l" for="publisher">
                Publisher:
              </label>
              <select className="form-i" name="publisher" id="publisher">
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
                value="genre value stored in database"
                required
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
                value="255"
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
              />
            </p>
            <p className="form-p">
              <label className="form-l" for="synopsis">
                Synopsis:{" "}
              </label>
              <textarea className="form-i" name="synopsis" id="synopsis">
                synopsis value stored in database
              </textarea>
            </p>
            <p className="text-center">
              <button className="button-gold">SUBMIT</button>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Update;

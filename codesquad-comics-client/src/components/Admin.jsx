function Admin() {
  return (
    <div>
      Admin
      <div className="mainContainer">
        <main>
          <h1>Admin Page</h1>
          <p className="textCenter">
            <button className="buttonGold">ADD NEW COMIC</button>
            <div className="tableWrapper">
              <table>
                <thead>
                  <strong>
                    <tr>
                      <th>COMIC TITLE</th>
                      <th>EDIT</th>
                      <th>DELETE</th>
                    </tr>
                  </strong>
                </thead>
                <tbody>
                  <tr>
                    <td>Batman: The Dark Knight Returns</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Black Panter: A Nation Under Our Feet Book 1</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Fun Home: A Family Tragicomic</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Hunter X Hunter Vol. 1 </td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>

                  <tr>
                    <td>Lumberjanes Vol. 1</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>

                  <tr>
                    <td>March: Book One</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>

                  <tr>
                    <td>One Piece, Vol 1: Days Gone Bye</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>

                  <tr>
                    <td>Parable of the Sower</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>

                  <tr>
                    <td>Queer: A Graphic History</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>

                  <tr>
                    <td>The Walking Dead, Vol 1: Days Gone Bye</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>

                  <tr>
                    <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>

                  <tr>
                    <td>Watchmen</td>
                    <td>
                      <button className="buttonBlue">EDIT</button>
                    </td>
                    <td>
                      <button className="buttonGold">DELETE</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </p>
        </main>
      </div>
    </div>
  );
}

export default Admin;

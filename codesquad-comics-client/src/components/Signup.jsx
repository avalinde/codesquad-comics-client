function Signup() {
  return (
    <div>
      Signup
      <div className="main-container">
        <main>
          <h1>Sign Up</h1>

          <form className="formF">
            <p className="formP">
              <label className="formL" for="firstName">
                First Name:{" "}
              </label>
              <input
                className="formI"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First"
                required
              />
            </p>

            <p className="formP">
              <label className="formL" for="lastName">
                Last Name:{" "}
              </label>
              <input
                className="formI"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last"
                required
              />
            </p>

            <p className="formP">
              <label className="formL" for="Email1">
                Email address:{" "}
              </label>
              <input
                className="formI"
                type="email"
                name="Email1"
                id="Email1"
                placeholder="Email"
                required
              />
            </p>

            <p className="formP">
              <label className="formL" for="Password1">
                Password:{" "}
              </label>
              <input
                className="formI"
                type="password"
                name="Password1"
                id="Password1"
                placeholder="Password"
                required
              />
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

export default Signup;

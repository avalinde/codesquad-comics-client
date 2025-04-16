function Login() {
  return (
    <div>
      Login
      <div className="main-container">
        <main>
          <h1>Login</h1>

          <form className="formF">
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

export default Login;

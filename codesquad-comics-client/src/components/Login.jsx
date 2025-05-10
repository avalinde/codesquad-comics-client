import { useState } from "react";

function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted successfully. ");
    console.log("Email: ", email);
    console.log("Password: ", password);
  };


  return (
    <div>
      Login
      <div className="main-container">
        <main>
          <h1>Login</h1>

          <form className="formF" onSubmit={handleLoginSubmit}>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
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

export default Login;

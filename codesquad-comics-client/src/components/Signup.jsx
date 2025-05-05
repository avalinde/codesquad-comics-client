import { useState } from "react";

function Signup({ user, setUser }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted successfully. ");
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div>
      Signup
      <div className="main-container">
        <main>
          <h1>Sign Up</h1>

          <form className="formF" onSubmit={handleSignupSubmit}>
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
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
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

export default Signup;

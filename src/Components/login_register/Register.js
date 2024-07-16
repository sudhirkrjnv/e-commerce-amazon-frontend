import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="registerbox">
          <p
            style={{
              marginTop: "10px",
              marginLeft: "20px",
              fontSize: "1.5em",
              fontWeight: "bold",
            }}
          >
            Register
          </p>
          <form style={{ marginTop: "10px", marginLeft: "20px" }}>
            <div>
              <label>Name</label>
              <br />
              <input className="boxes" type="text" name="name" id="name" />
            </div>
            <br />
            <div>
              <label>Email</label>
              <br />
              <input className="boxes" type="text" name="email" id="email" />
            </div>
            <br />
            <div>
              <label>Mobile Number</label>
              <br />
              <input className="boxes" type="text" name="mobile" id="mobile" />
            </div>
            <br />
            <div>
              <label>Password</label>
              <br />
              <input
                className="boxes"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <br />
            <div>
              <label> Confirm Password</label>
              <br />
              <input
                className="boxes"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <br />
            <button className="continue">Continue</button>
          </form>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Already have an Account</p>
        </div>
        <Link className="link" to="/login/">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="loginhere">Login here</p>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Register;

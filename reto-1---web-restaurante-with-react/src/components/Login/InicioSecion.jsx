import React from "react";

const InicioSeccion = () => {
  return (
    <>
      <section className="register-account">
        <div className="signform">
          <div className="left">
            <a
              href="cuenta"
              style={{ float: "right", marginRight: 35, fontSize: "0.9em" }}
              className="bts-a"
            >
              Don't have an account? Sign up!
            </a>
            <div className="bts">
              <a href="facebook" className="fblogin social">
                <i className="fa fa-facebook" />
                <span>Sign in with Facebook</span>
              </a>
              <a href="twitter" className="twlogin social">
                <i className="fa fa-twitter" />
                <span>Sign in with Twitter</span>
              </a>
              <a href="google" className="gplogin social">
                <i className="fa fa-google-plus" />
                <span>Sign in with Google</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="headit">
              <h4>Login To Your Account</h4>
            </div>
            <div className="form">
              <form className="login-form" id="login-form">
                <input type="text" placeholder="User Name" />
                <input type="password" placeholder="Password" />
                <input
                  className="subbt"
                  type="submit"
                  defaultValue="Sign In"
                  style={{ border: "none" }}
                />
              </form>
              <input type="checkbox" id="remember" name="remember" />
              <span style={{ color: "#b6b6b6", fontSize: "0.9em" }}>
                {" "}
                Remember Me
              </span>
              <a href="password">Forgot your password?</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InicioSeccion;

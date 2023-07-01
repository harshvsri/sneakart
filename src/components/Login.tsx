const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-5 py-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-dark">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" homePage cover-container text-center text-bg-light mx-auto">
        <p className="lead">
          Join us on this exciting journey of footwear discovery. Start
          exploring our collection today and find the perfect pair that not only
          complements your style but also elevates your confidence. Thank you
          for choosing ShoeKart, where fashion meets comfort and quality meets
          style.
        </p>
      </div>
    </>
  );
};

export default Login;

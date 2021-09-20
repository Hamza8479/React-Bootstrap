import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="container-fluid mb-5">
        <h1 className="text-center text-capitalize pt-5">contact us</h1>
        <hr className="w-25 mx-auto mb-5" />
        <div className="row mb-5">
          <div className="w-50 mx-auto">
            <form action="">
              <div className="form-group mb-2">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="number">Mobile No</label>
                <input type="number" id="number" className="form-control" />
              </div>
              <div className="form-group mb-2">
                <label>Text area</label>
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group form-check mb-2">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />{" "}
                  Remember me
                </label>
              </div>
              <button className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

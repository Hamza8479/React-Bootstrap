import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Gallery = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  // const MyVerticallyCenteredModal = () => {

  // };
  return (
    <div>
      <div className="container">
        <h1 className="text-center text-capitalize pt-5">gallery</h1>
        <hr className="w-25 mx-auto mb-5" />
        <div className="row">
          <div className="col-lg-4 col-md-2 col-12 mb-4">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-2 col-12 mb-4">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-2 col-12 mb-4">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-2 col-12 mb-4">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-2 col-12 mb-4">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-2 col-12 mb-4">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-2 col-12 mb-4">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-2 col-12 mb-4">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              alt=""
            />
          </div>

          <div className="col-lg-4 col-md-2 col-12 mb-4">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <section className="bg-primary mb-5">
        <article className="py-4 text-center text-white">
          <div>
            <h3 className="display-4 ">Want To Join</h3>
            <p>Be a part of us.</p>
            <button className="btn btn-warning" onClick={handleShow}>
              Join Now
            </button>
          </div>
          <Modal show={modalShow} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>SignUp</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group form-check ">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />{" "}
                    Remember me
                  </label>
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </article>
      </section>
    </div>
  );
};

export default Gallery;

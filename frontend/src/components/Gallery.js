import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Gallery = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const MyVerticallyCenteredModal = () => {
    <Modal
      //   {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>;
  };
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
            <button
              className="btn btn-warning"
              onClick={() => setModalShow(true)}
            >
              Join Now
            </button>
          </div>
          {MyVerticallyCenteredModal()}
        </article>
      </section>
    </div>
  );
};

export default Gallery;

import React from "react";
import { Card, Button } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center text-capitalize pt-5">services</h1>
        <hr className="w-25 mx-auto mb-5" />

        <div className="row mb-5 text-center">
          <div className="col-lg-3 col-md-4 col-10 offset-lg-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-4 col-10">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-4 col-10">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <section className="bg-primary mb-5">
        <article className="py-4 text-center text-white">
          <div>
            <h3 className="display-4 ">+92 334 23 00 0 0</h3>
            <p>If you want best services call us.</p>
            <button className="btn btn-warning">Contact Now</button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Services;

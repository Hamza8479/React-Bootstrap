import React from "react";
import vector from "../images/vector5.svg";
const Main = () => {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <h1 className="text-center text-capatalize pt-5">About Us</h1>
          <hr className="w-25 mx-auto mb-5" />

          <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
                alt=""
                className="img-fluid w-100"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h1>Who Am I?</h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima, delectus enim placeat quibusdam veniam nisi
                vel consequatur blanditiis in ipsum cumque quidem porro rem
                praesentium aliquam qui incidunt asperiores?
              </p>
              <button className="btn btn-primary"> Wanna Know Me</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

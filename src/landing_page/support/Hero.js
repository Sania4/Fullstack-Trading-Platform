import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5 px-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>

      <div className="row m-5">
        <div className="col-7 p-5">
          <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."/> <br/>
          <a href="">Track account opening</a>

          <a href="">Track segment activation</a><br/>

          <a href="">Intraday margins</a><br/>

          <a href="">Kite user manual</a><br/>
        </div>

        <div className="col-5 mt-5">
          <h1 className="fs-4">Featured</h1>
          <ol style={{lineHeight: '3'}}>
          <li><a href="">Non-business day for mutual funds on Wednesday, November 20, 2024</a></li>
          <li><a href="">MCX Option contracts expiry - November 2024</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

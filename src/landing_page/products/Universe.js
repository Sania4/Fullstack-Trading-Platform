import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted my-3">
          Extend your trading and investment experience even further with our partner platforms
        </p>

        <div className="col-4 mt-5 p-3">
          <img src="/images/smallcaseLogo.png" />
          <p className="text-small text-muted my-3 mx-5 fs-6">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>

        <div className="col-4 mt-5 p-3">
          <img src="/images/streak-logo.png" style={{width: "50%", height:"30%"}} />
          <p className="text-small text-muted my-3 mx-5 fs-6">Systematic trading platform that allows you to create and backtest strategies without coding</p>
        </div>

        <div className="col-4 mt-5 p-3">
          <img src="/images/tijori.svg" style={{width: "50%", height:"30%"}} />
          <p className="text-small text-muted my-3 mx-5 fs-6">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
        </div>

        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: "0 auto" }}>Signup Here</button>
      </div>
    </div>
  );
}

export default Universe;

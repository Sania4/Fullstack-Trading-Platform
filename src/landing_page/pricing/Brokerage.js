import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-8 p-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-4 mb-4">Brokerage Calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2" }}
            className="text-muted"
          >
            <li>Securities/Commodities transaction tax</li>
            <li>Transaction/Turnover Charges</li>
            <li>Call & trade</li>
          </ul>
        </div>

        <div className="col-4 p-5 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-4 mb-4">List of charges</h3>
            <ul
              style={{ textAlign: "left", lineHeight: "2" }}
              className="text-muted"
            >
              <li>Stamp charges</li>
              <li>NRI brokerage charges</li>
              <li>Account with debit balance</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

import React from "react";

function Ticket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h4 className="text-muted fs-4">
          To create a ticket, select a relevant topic
        </h4>
        
        <div className="col-4 p-5 mt-2 mb-5">
        <h5 className="fs-5">
        <i class="fa-regular fa-square-plus"></i> Account Opening
        </h5>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Getting started</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Online</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Offline</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Charges</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Company, Partnership and HUF</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Non Resident Indian (NRI)</a><br/>
        </div>

        <div className="col-4 p-5 mt-2 mb-5">
        <h5 className="fs-5">
        <i class="fa-regular fa-user"></i> Your Zerodha Account
        </h5>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Login credentials</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Your Profile</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Account modification</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Nomination</a><br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-5">
        <h5 className="fs-5">
        <i class="fa-solid fa-signal"></i> Trading and Markets
        </h5>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Trading FAQs</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Kite</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Margins</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Product and order types</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Corporate actions</a><br/>
        <a href="" style={{textDecoration: 'none', lineHeight: "2"}}>Kite features</a><br/>
        </div>
      </div>
    </div>
  );
}

export default Ticket;

import React from "react";

function LeftCard({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5 border-top ">
        <div className="col-6  mt-5">
          <img src={imageURL} />
        </div>
        
        <div className="col-6 p-5 mt-5">
          <h1 className="mb-4">{productName}</h1>
          <p style={{width: "50%", lineHeight: "1.7"}}>{productDescription}</p>

          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftCard;

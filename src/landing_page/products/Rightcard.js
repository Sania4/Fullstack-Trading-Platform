import React from 'react';

function RightCard({imageURL, productTitle, productDescription, learnMore}) {
    return (  
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-6 p-5 mt-5'>
                    <h1 className='mb-5'>{productTitle}</h1>
                    <p >{productDescription}</p>
                    <a href={learnMore} style={{ textDecoration: "none" }}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className='col-6 p-5 mt-5'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
    );
}

export default RightCard;
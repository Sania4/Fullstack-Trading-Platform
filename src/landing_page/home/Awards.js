import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='\images\largestBroker.svg' alt='Broker Image'/>
                </div>    
                    <div className='col-6 p-5 mt-3'>
                        <h1 className='fs-2'>Largest Stock Broker in India</h1>
                        <p className='mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        <div className='row'>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <p>Futures & Options</p>
                                    </li>
                                    <li>
                                        <p>Commodity Derivatives</p>
                                    </li>
                                    <li>
                                        <p>Currency Derivatives</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <p>Stocks & IPOs</p>
                                    </li>
                                    <li>
                                        <p>Mutual Funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds & Govt. Securities</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img src='/images/pressLogos.png' style={{width: "90%"}}/>
                    </div>       
            </div>
        </div>
    );
}

export default Awards;
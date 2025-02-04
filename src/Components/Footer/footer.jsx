import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />
                <span className="secondaryText">
                    Our vision is to make all people <br />
                    the best place too live for them.
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Pune, Maharashtra</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default footer
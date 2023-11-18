import React from 'react'
import './contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to Contact Us</span>
            <span className='secondaryText'>
                We always rady to help by providing the best service
                <br />believe a good balce to live can meke your lif better
            </span>
            <div className="flexColStart contactModes">
            {/* first row */}
                <div className="flexStart row">
                {/* first row */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText '>021 212 1213 1231</span>
                            </div>
                        </div>
                        <div className="flexColStart button">Call Now</div>
                    </div>
                {/* second mode */}
                <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText '>021 212 1213 1231</span>
                            </div>
                        </div>
                        <div className="flexColStart button">Chat Now</div>
                    </div>

                </div>
            {/* second row */}
            <div className="flexStart row">
                {/* first row */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText '>021 212 1213 1231</span>
                            </div>
                        </div>
                        <div className="flexColStart button">Message Now</div>
                    </div>
                {/* second mode */}
                <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText '>021 212 1213 1231</span>
                            </div>
                        </div>
                        <div className="flexColStart button">Video Call Now</div>
                    </div>

                </div>
            </div>

            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default contact
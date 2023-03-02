import "./cta.css"
import React from "react"

const CTA = () =>{
    return(
       <section className="calltoaction">
        <div className="calltoactionContainer">
            <div className="inputSection">
                <form action="" method="post">
                <label htmlFor="">
                <h2>Subscribe to hear about our deals!</h2>
                    <input className = "subscribeInput" type="email" placeholder="Enter your email" required/>
                    <button className="subscribeBtn">Subscribe</button>
                </label>
                </form>
            </div>

            <div className="messageSection">
                <h2>Have questions?</h2>
                <p>Email us at <em>info@matrixgroup.com</em></p>
                <p>And we can help you!</p>
            </div>
        </div>
       </section>
    )
}

export default CTA
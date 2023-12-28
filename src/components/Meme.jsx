// eslint-disable-next-line no-unused-vars
import React from "react";



export default function Meme(){
    return (
        <section className="form">
            <div className="form-inputs">
                <div className="form-label-input">
                    <label htmlFor="form-input-id" className="form-label">Top text</label>
                    <input type="text" placeholder="Shut up" className="form-input" id="form-input-id" />
                </div>

                <div>
                    <label htmlFor="form-input-id1" className="form-label">Bottom text</label>
                    <input type="text" placeholder="and take my money" className="form-input" id="form-input-id1" />
                </div>
            </div>
            
            <button className="submit-btn" type="submit">Gew a new meme image 🖼</button>    
        </section>
    )
}
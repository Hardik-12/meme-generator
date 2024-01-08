// eslint-disable-next-line no-unused-vars
import React from "react";
import memeData from "../../memeData";



export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })


    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                [name]: value
            }
        })
    }

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                randomImage: memesArray[randomNumber].url
            }
        })
    }

    return (
        <section className="form">
            <div className="form-inputs">
                <div className="form-label-input">
                    <label htmlFor="form-input-id" className="form-label">Top text</label>
                    <input 
                        type="text" 
                        placeholder="Top Text" 
                        className="form-input" 
                        id="form-input-id" 
                        onChange={handleChange}
                        name="topText"
                        value = {meme.topText}
                    />
                </div>

                <div>
                    <label htmlFor="form-input-id1" className="form-label">Bottom text</label>
                    <input 
                        type="text" 
                        placeholder="Bottom Text" 
                        className="form-input" 
                        id="form-input-id1" 
                        onChange={handleChange}
                        name='bottomText'
                        value = {meme.bottomText}
                    />
                </div>
            </div>
            
            <button className="submit-btn" type="submit" onClick = {getMemeImage}>Get a new meme image 🖼</button>    

            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt='Image displayed' />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}
import React, { useEffect, useRef, useState } from "react";
import downloadImage from "./services/generateImageDom";
import fetchMemes from "./services/ImagesService.js";

export default function Meme() {

    const memeContainerRef = useRef(null);
    const [allMemeImages, setAllMemeImages] = useState([]);
    const [meme, setMeme] = useState({ topText: '', bottomText: '', randomImage: 'http://i.imgflip.com/1bij.jpg' });

    useEffect(() => { fetchMemes(setAllMemeImages); }, []);

    function getMemeImage(e) {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({ ...prevMeme, randomImage: url }));
    }

    function handleInput(e) {
        const { value, name } = e.target;
        setMeme(prevValue => ({ ...prevValue, [name]: value }));
    }

    const handleDownloadClick = () => downloadImage(memeContainerRef);

    return (
        <>
            <main>
                <form className="form-meme">
                    <input id="top-text" className="text-input" placeholder="Top text" value={meme.topText} name="topText" onChange={handleInput} />
                    <input id="bottom-text" className="text-input" placeholder="Bottom text" value={meme.bottomText} name="bottomText" onChange={handleInput} />
                    <button className="form-meme-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
                </form>
                <div className="meme" ref={memeContainerRef}>
                    <img src={meme.randomImage} alt="Meme" className="meme-image" id="meme-image"/>
                    <h2 id="meme-text-top" className="meme-text top">{meme.topText}</h2>
                    <h2 id="meme-text-bottom" className="meme-text bottom">{meme.bottomText}</h2>
                </div>
                <div className="download">
                    <button className="download-meme" onClick={handleDownloadClick}>
                        <img src="/images/download.png" alt="download" />
                    </button>
                </div>
            </main>
        </>
    );
}
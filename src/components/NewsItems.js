import React, { useState, useEffect } from 'react';

const NewsItems = (props) => {
    const [isValid, setIsValid] = useState(false)

    const imageStyle = {
        height: '300px',
    };

    useEffect(()=>{
        checkImage(props.urlToImage);
        // eslint-disable-next-line
    },[])

    const checkImage = (imageUrl) => {
        isImageValid(imageUrl).then((isValid1) => {
        setIsValid(isValid1)
        });
    };

    const isImageValid = (imageUrl) => {
        return new Promise((resolve) => {
            const img = new Image();

            img.onload = function () {
                resolve(true);
            };

            img.onerror = function () {
                resolve(false);
            };

            img.src = imageUrl;
        });
    };



        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex : '1' }}>
                        {props.source}
                        
                    </span>
                    {isValid ? (
                        <img src={props.urlToImage} alt="News thumbnail" style={imageStyle} />
                    ) : (
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBAZafcETIewM5tuVRKUWoqpVNB5CKrIbGzOIB8IxWx40WQ2DK2MDkmbEin9_mu1K54Y&usqp=CAU"
                            alt="Not found"
                            style={imageStyle}
                        />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}.</p>
                        <p className="card-text"><small className="text-muted">By {props.author ? props.author : "unknown"} at {new Date(props.date).toGMTString()}</small></p>
                        <a href={props.url} rel="noreferrer" target="_blank" className="btn btn-dark">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        );
    
}

export default NewsItems

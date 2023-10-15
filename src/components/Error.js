import React from 'react'
import ErrorImage from "./error.gif"

export default function Error() {
    return (
        <div>
            <div className="container">
            <img src={ErrorImage} alt="" />
            </div>
        </div>
    )
}

import React, { useState } from "react";

export const Layouot = () => {
    const [headerId, setID] = useState(0);
    return (
        <div className="mheader">
            <h1 className="title">This is Chatbot</h1>
        </div>
    )
}
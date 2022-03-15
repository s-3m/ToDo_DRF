import React from "react";


const NotFound404 = ({location}) => {
    return (
        <div className="not_found">
            <h1>К сожалению страницы '{location.pathname}' не существует</h1>
        </div>
    )
}

export default NotFound404
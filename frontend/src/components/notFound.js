import React from "react";
import { useLocation } from 'react-router-dom'


const NotFound404 = () => {
    let path = useLocation()
    return (
        <div className="not_found">
            <h1>К сожалению страницы '{path.pathname}' не существует</h1>
        </div>
    )
}

export default NotFound404
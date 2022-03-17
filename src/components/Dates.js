import React from "react";

const Dates = ({dates}) => {
    return (
        dates.map(date => (
            <em className="date">
                <small>{date.title}</small> <span>{date.month} {date.year}</span>
            </em>
        ))
    )
}

export default Dates;
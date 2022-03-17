import React from "react";

const FocusItems = ({items, focusText = "Area of Focus:"}) => {
    return (
        <div className="achievements">
            {
                (
                    Array.isArray(items) ?
                        (
                            <>
                                <p className="mb-0">
                                    <small className="text-focus">{focusText}</small>
                                </p>
                                {
                                    items.map((achievement) => (
                                        <p className="mb-0">{achievement}</p>
                                    ))
                                }
                            </>
                        )
                        : (
                            <p>
                                <small className="text-focus">{focusText}</small>{items}
                            </p>
                        )
                )
            }
        </div>
    )
}

export default FocusItems;
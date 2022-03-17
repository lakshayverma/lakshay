import React from 'react';

const Stats = ({id, stats, focusText = null}) => {
    return (
        <div className="stats">
            {
                focusText &&
                <p className="mb-0">
                    <small className="text-focus">{focusText}</small>
                </p>
            }
            <div className="stat-pills-container">
                {
                    stats && stats.map((tech) => {
                        return (
                            <span key={`${id}-technology_${id}-${tech}`} className="stat-pill">{tech}</span>
                        );
                    })
                }
            </div>
        </div>
    )
}


export default Stats;


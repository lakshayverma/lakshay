import React, {Component} from "react";

const Achievements = ({achievements}) => {
    return (
        <div className="achievements">
            {
                (
                    Array.isArray(achievements) ?
                        (
                            <>
                                <p className="mb-0">
                                    <small className="text-focus">Area of Focus: </small>
                                </p>
                                {
                                    achievements.map((achievement) => (
                                        <p className="mb-0">{achievement}</p>
                                    ))
                                }
                            </>
                        )
                        : (
                            <p>
                                <small className="text-focus">Area of Focus: </small>{achievements}
                            </p>
                        )
                )
            }
        </div>
    )
}

const Dates = ({dates}) => {
    return (
        dates.map(date => (
            <em className="date">
                <small>{date.title}</small> <span>{date.month} {date.year}</span>
            </em>
        ))
    )
}

export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.education &&
                            resumeData.education.map(item => {
                                return (
                                    <div className="row item" key={item.id}>
                                        <div className="twelve columns">
                                            <h3>{item.universityName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>{" "}
                                                <Dates dates={item.dates}/>
                                            </p>
                                            <Achievements achievements={item.achievements}/>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        {resumeData.work &&
                            resumeData.work.map(item => {
                                return (
                                    <div className="row item" key={item.id}>
                                        <div className="twelve columns">
                                            <h3>{item.companyName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>
                                                <Dates dates={item.dates}/>
                                            </p>
                                            <Achievements achievements={item.achievements}/>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <p>{resumeData.skillsDescription}</p>

                        <div className="bars">
                            <ul className="skills">
                                {resumeData.skills &&
                                    resumeData.skills.map(item => {
                                        return (
                                            <li key={item.id}>
                        <span
                            className={`bar-expand ${item.skillName.toLowerCase()} percent-${item.percent}`}
                        ></span>
                                                <em>{item.skillName}</em>
                                                <span className="skill-level">{item.level}</span>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

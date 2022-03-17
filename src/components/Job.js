import React, { Component } from "react";
import FocusItems from "./FocusItems";
import Stats from "./Stats";
export default class Job extends Component {
  render() {
    const { id = "jobs", title= "Jobs", items = [], description = "", statsTitle = null } = this.props;
    return (
      <section id={id} className="jobs-container">
        <div className="row portfolio">
          <div className="three columns header-col">
            <h1>
              <span>{title}</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="nine columns main-col">
              <p className="text-title">{description}</p>
              {items &&
                items.map(item => {
                  return (
                    <div className="row item" key={item.id}>
                      <div className="twelve columns">
                        <h3>{item.name}</h3>
                        <p className="info">
                          {item.description}
                        </p>
                        <Stats id={item.id} stats={item.stats} focusText={statsTitle}/>
                        {item.achievements && <FocusItems items={item.achievements} focusText={"Responsibilities"}/>}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/Logo-512.png" alt={resumeData.name} />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              {
                resumeData.aboutMe
              }
            </p>
          </div>
        </div>
      </section>
    );
  }
}

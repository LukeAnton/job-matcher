import React from "react";
import pic from "../../assets/img/me.png";
// import PropTypes from "prop-types";

const About = ({
  jobTitle,
  companyName,
  rate,
  date,
  hrs,
  location,
  branch,
  logo,
  shifts,
  number
}) => {
  return (
    <div>
      <div className="jobs">
        <h1 className="h1">Jobs Available</h1>
      </div>
      <div className="space grid-2 my-2">
        <div>
          <img className="job-pic" src={pic} alt="logo" />
        </div>
        <div>
          <h5>{jobTitle}</h5>
          <div>{companyName}</div>
          <div>${rate}</div>
          <p>Mon, Sep 5 - Fri, Sep 16</p>
        </div>
      </div>

      <hr className="margin-bottom" />
      <div className="my-2">
        <h3>If you take this job you are agreeing to work ALL DAYS!</h3>

        {shifts.map(shifts => (
          <div className="thin" key={shifts.id} shifts={shifts}>
            {shifts.startDate} - {shifts.endDate}
          </div>
        ))}
      </div>
      <hr />

      <div className="my-1">
        <h4>Location:</h4>
        <a className="link" href="/">
          {location}
        </a>
      </div>
      <hr />
      <div className="my-1">
        <h4>Branch:</h4>
        <div>{branch}</div>
        <a className="link" href="/">
          {number}
        </a>
      </div>
    </div>
  );
};

export default About;

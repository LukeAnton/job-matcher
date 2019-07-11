import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Job from "./components/pages/Job";
import "./App.css";

const App = () => {
  const [jobTitle, setJob] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState("");
  const [rate, setRate] = useState("");
  const [shifts, setShifts] = useState([]);
  const [reportTo, setReportTo] = useState("");
  const [date, setDate] = useState("");
  const [hrs, setHrs] = useState("");
  const [location, setLocation] = useState("");
  const [branch, setBranch] = useState("");
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const getJob = async username => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/LukeAnton/job-matcher/job"
      );
      const resWage = await axios.get(
        "https://my-json-server.typicode.com/LukeAnton/job-matcher/wage"
      );
      const resShifts = await axios.get(
        "https://my-json-server.typicode.com/LukeAnton/job-matcher/shifts"
      );
      const resBranch = await axios.get(
        "https://my-json-server.typicode.com/LukeAnton/job-matcher/branchDetails"
      );
      setJob(res.data.title);
      setLogo(res.data.company.logo);
      setCompanyName(res.data.company.name);
      setRate(resWage.data.wagePerHourInCents);
      setShifts(resShifts.data);
      setLocation(res.data.company.address);
      setBranch(resBranch.data.branch);
      setNumber(resBranch.data.branchPhoneNumber);
    };
    getJob();
    console.log(jobTitle);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Job
          jobTitle={jobTitle}
          companyName={companyName}
          rate={rate}
          date={date}
          hrs={hrs}
          location={location}
          branch={branch}
          shifts={shifts}
          number={number}
        />
      </div>
    </div>
  );
};

export default App;

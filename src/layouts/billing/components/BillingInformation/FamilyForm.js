import React, { useState } from "react";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { PostAdd, TonalitySharp } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  let naam;
  let value;

  function handleInputs(e) {
    console.log(e.target.value);
    naam = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [naam]: value,
    });
  }

  const postDetails = async (e) => {
    e.preventDefault();
    // cors error so setting proxy in package.json in frontend to localhost 5000
    const p = await fetch("http://localhost:5000/add-member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await p.json();
    // console.log(json);
    toast.success("Family Member Added Successfully");
    navigate("/billing");
  };

  const print1 = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Card style={{ padding: "30px" }}>
      <h1 className="formheading"> New Family Member </h1>
      <div className="form">
        <form>
          <p className="inputlabel"> Name </p>
          <input name="name" className="name" type="text" required="true" onChange={handleInputs} />
          <p className="inputlabel"> Contact </p>
          <input
            name="contact"
            className="contact"
            type="text"
            required="true"
            onChange={handleInputs}
          />
          <p className="inputlabel"> Email </p>
          <input
            name="email"
            className="email"
            type="text"
            required="true"
            onChange={handleInputs}
          />
          <p className="inputlabel"> Address </p>
          <textarea
            name="address"
            className="address"
            cols=""
            rows=""
            required="true"
            onChange={handleInputs}
          />
          <button className="btn" type="submit" onClick={postDetails}>
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Card>
  );
}

export default Form;

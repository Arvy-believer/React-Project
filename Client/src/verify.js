import React, { useState, useEffect } from 'react';
import Login from './Login';
import Axios from 'axios';
import Home from './Home';
import { Route, Link } from 'react-router-dom';
import { useHistory, useLocation} from "react-router-dom";

function Verify() {
    let history = useHistory();

    const location = useLocation();

    const id = location.state;

    console.log(id);
    const [r_otp, setr_otp] = useState("");

    const SendOTP = () => {
        Axios.post("http://localhost:5000/auth/otp", {
        id: id
        }).then((response) => {
            console.log(response.data);
        });
    }

    const verifyOTP = () => {
        console.log("verifyOTP me aagaya");
        Axios.post("http://localhost:5000/auth/verify", {
        id: id,
        r_otp: r_otp
        }).then((response) => {
            console.log("response bhi aa raha hai");
                history.push({
                pathname: "/home",
                state:id
              });
        });
    };

  return (
    <div className="Verify">
        <div class="verify">
                    
        <div class="mb-3">
                <label for="OTP">Enter OTP</label>
                <input type="number" class="form-control" id="otp" name="pas" onChange={(event) => {
                setr_otp(event.target.value);
                }} />
        </div>
        <br></br>       
            <button type="submit" class="btn btn-primary" onClick={verifyOTP}>Submit OTP</button>
            <button type="submit" class="btn btn-primary" onClick={SendOTP}>Send OTP</button>
        </div>
    </div>
  );
}

export default Verify;
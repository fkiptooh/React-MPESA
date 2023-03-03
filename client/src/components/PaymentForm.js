import axios from "axios";
import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Swal from "sweetalert2";

function PaymentForm() {
  const [details, setDetails] = useState({
    phone: "",
    amount: "",
  });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  var reqcount = 0;
  const stkPushQuery = (checkOutRequestID) => {
    const timer = setInterval(() => {
      reqcount += 1;
      if (reqcount === 20) {
        clearInterval(timer);
        setLoading(false);
        setErrorMsg("you took too long to pay");
        setError(true);
        return;
      }
      axios
        .post("/stkpushquery", {
          CheckoutRequestID: checkOutRequestID,
        })
        .then((response) => {
          if (response.data.ResultCode === "0") {
            clearInterval(timer);
            //successfull payment
            setLoading(false);
            Swal.fire(
              "SUCCESS!",
              "We received your purchase request , we'll be in touch shortly!",
              "success"
            );
            setDetails({
              phone: "",
              amount: "",
            });
          } else if (response.errorCode === "500.001.1001") {
            console.log(response.errorMessage);
          } else {
            clearInterval(timer);
            setLoading(false);
            setError(true);
            setErrorMsg(response.data.ResultDesc);
            // console.log(response);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!details.phone || !details.amount) {
      setError(true);
      setErrorMsg("please fill all fields");
      return;
    }
    if (details.phone.length !== 10) {
      setError(true);
      setErrorMsg("enter a valid phone number");
      return;
    }
    if (details.phone.substring(0, 2) !== "07") {
      if (details.phone.substring(0, 2) !== "01") {
        setError(true);
        setErrorMsg("start with 07.. or 01..");
        return;
      }
    }

    setError(false);
    setErrorMsg("");

    axios
      .post("/stk", details)
      .then((res) => {
        setLoading(true);
        stkPushQuery(res.data.CheckoutRequestID);
        console.log(res.data.CheckoutRequestID);
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
        setErrorMsg("something wrong happened..try later");
      });
  };
  return (
    <div className="col-12 col-md-5 mb-5 mt-5 ">
      <div className="book-cover-holder">
        <h1 className="headline mb-3">EASY CHECKOUT</h1>
        <div className="subheadline mb-4">
          Simple checkout made with reactJS
        </div>
        {error && (
          <div
            className="alert alert-danger mt-1 mb-1"
            role="alert"
            style={{ textAlign: "center" }}
          >
            {errorMsg}
          </div>
        )}
        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div>
              <LoadingSpinner />
              <h3>Processing payment...</h3>
              <h3 className="subheadline mb-4">STK PUSH SENT TO YOUR PHONE</h3>
              <h3
                className="subheadline mb-4 text-primary"
                style={{ fontWeight: "bold" }}
              >
                {details.phone}
              </h3>

              <h3 className="subheadline mb-4">enter pin to confirm payment</h3>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputEmail1"
                required
                autoFocus
                name="phone"
                onChange={handleChange}
                value={details.phone}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                required
                name="amount"
                onChange={handleChange}
                value={details.amount}
              />
            </div>
            <div className="col-12 col-md-auto">
              <button type="submit" className="btn btn-primary w-100">
                PAY {details.amount}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default PaymentForm;

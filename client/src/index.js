import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.baseURL = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


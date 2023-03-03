import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("/transactions")
      .then((data) => {
        setTransactions(data.data);
        // console.log(transactions);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="col-12 col-md-7 pt-5 mb-5 ">
      <div className="promo pe-md-3 pe-lg-5">
        <h1 className="headline mb-3" style={{ textAlign: "center" }}>
          TRANSACTION LIST
        </h1>
        <div className="cta-holder row gx-md-3 gy-3 gy-md-0">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Phone</th>
                <th scope="col">TrnxID</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length < 1 ? (
                <tr>
                  <td className="text-center" colSpan={6}>
                    No Record Found
                  </td>
                </tr>
              ) : (
                transactions.map((transaction) => (
                  <tr key={transaction._id}>
                    <td>{new Date(transaction.createdAt).toDateString()}</td>
                    <td>{transaction.amount}</td>
                    <td>
                      {transaction.customer_number.substring(0, 4)}xxxx
                      {transaction.customer_number.slice(-2)}
                    </td>
                    <td>{transaction.mpesa_ref}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/*//cta-holder*/}
      </div>
    </div>
  );
}

export default DisplayTable;

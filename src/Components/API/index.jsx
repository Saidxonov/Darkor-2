import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function API() {
  const [res, setRes] = useState([]);

  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        if ((response.status = 200)) {
          setRes(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="API">
        <div className="top-content">
          <h2>3.masala</h2>
          <h1>API'dan Ma'lumot Olish va Kartochkalar</h1>
        </div>
        <div className="block">
          {res.length > 0 &&
            res.map(function (value, index) {
              return (
                <div key={index} className="card_api">
                  <p className="id">{value.id}</p>
                  <div className="local">
                    <div className="mt-4 name">
                      <p>Name: {value.name}</p>
                    </div>
                    <div className="mt-4 email">
                      <p>Email: {value.email}</p>
                    </div>
                    <div className="mt-4 city">
                      <p>City: {value.address.city}</p>
                    </div>
                    <div className="mt-4 street">
                      <p>Street: {value.address.street}</p>
                    </div>
                    <div className="mt-4 website">
                      <a target="_blank" href={value.website}>
                        Website: {value.website}
                      </a>
                    </div>
                  </div>
                  <div className="all">
                    <div className="mt-4 username">
                      <p>Username: {value.username}</p>
                    </div>
                    <div className="mt-4 phone">
                      <p>Phone: {value.phone}</p>
                    </div>
                    <div className="mt-4 company">
                      <p>Company: {value.company.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default API;

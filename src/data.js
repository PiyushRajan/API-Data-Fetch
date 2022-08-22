import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import [useNavigate]
import "./data.css";

function Data() {
  const navigate = useNavigate();
  const [data, getData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const fetchdata = async () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };

  const detail = (ele) => {
    const user = data.filter((curele) => {
      return curele.id === ele;
    });
    console.log(user);
    navigate("/user", { state: { user } });
  };

  return (
    <>
      <button className="btn" onClick={fetchdata}>
        Display data
      </button>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Button</th>
          </tr>
        </thead>
        {data.map((item, i) => (
          <tbody>
            <tr key={i}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                {
                  <button
                    className="btn"
                    onClick={() => {
                      detail(item.id);
                    }}
                  >
                    click
                  </button>
                }
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Data;

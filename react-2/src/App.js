import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {



  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    masai_student: "",
    date: "{0:DD-MM-YYYY}"
  })

  const [dataArray, setDataArray] = useState([]);

  const [FData, setFData] = useState([]);

  console.log(data);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setFData([
      ...FData,
      data
    ]);
    //setDataArray()
  }

  console.log("FData", FData)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>


      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="first_name" placeholder="First Name" value={data.first_name} onChange={handleChange} />
          <input type="text" name="last_name" placeholder="Last Name" value={data.last_name} onChange={handleChange} /><br />

          Gender:
          <label htmlFor="male">Male</label>
          <input type="radio" value="male" name="gender" onChange={handleChange} />
          <label htmlFor="female">Female</label>
          <input type="radio" value="female" name="gender" onChange={handleChange} /> <br />

          Are You a Masai Student?
          <label htmlFor="Yes">Yes</label>
          <input type="checkbox" value="Yes" name="masai_student" onChange={handleChange} />
          <label htmlFor="No">No</label>
          <input type="checkbox" value="No" name="masai_student" onChange={handleChange} />

          <input type="date" value="date.toString(" name="date" onChange={handleChange} />


          <input type="submit" value="submit" />
        </form>
      </div>


      <table style={{border: "1px solid black", margin: "20px auto"}}>
        <thead >
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Masai Student</th>
            <th>Date</th>
          </tr>

        </thead>
        <tbody>
          {
            FData.map((el) => {

              return (
                <tr>
                  <td>{el.first_name}</td>
                  <td>{el.last_name}</td>
                  <td>{el.gender}</td>
                  <td>{el.masai_student}</td>
                  <td>{el.date}</td>
                </tr>
              )

            })
          }

        </tbody>

      </table>

    </div>
  );
}



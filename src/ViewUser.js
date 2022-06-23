import React from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const tableDetails = [
    {
      id: 1,
      Name: "Person 1",
      Position: "Manager",
      Office: "Chennai",
      Age: "45",
      StartDate: "12/05/2021",
      Salary: "60000",
    },
    {
      id: 2,
      Name: "Person 2",
      Position: "Manager",
      Office: "Chennai",
      Age: "45",
      StartDate: "12/05/2021",
      Salary: "60000",
    },
    {
      id: 3,
      Name: "Person 3",
      Position: "Manager",
      Office: "Chennai",
      Age: "45",
      StartDate: "12/05/2021",
      Salary: "60000",
    },
  ];
  let { id } = useParams();
  console.log(id);

  return (
    <div className="card align-middle" style= {{width: '18rem'}}>
      <div className="card-header align-middle">User Details</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Name      :       ${tableDetails[id - 1].Name}`}</li>
        <li className="list-group-item">{`Position  :       ${tableDetails[id - 1].Position}`}</li>
        <li className="list-group-item">{`Office    :       ${tableDetails[id - 1].Office}`}</li>
        <li className="list-group-item">{`Age       :       ${tableDetails[id - 1].Age}`}</li>
        <li className="list-group-item">{`Start Date:       ${tableDetails[id - 1].StartDate}`}</li>
        <li className="list-group-item">{`Salary    :       ${tableDetails[id - 1].Salary}`}</li>
      </ul>
    </div>
  );
}

export default ViewUser;

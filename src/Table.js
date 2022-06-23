import React from "react";
import { Link } from "react-router-dom";

const tableDetails = [
  {
    id: 1,
    Name : 'Person 1',
    Position: 'Manager',
    Office: 'Chennai',
    Age: '45',
    StartDate: '12/05/2021',
    Salary: '60000'
  },
  {
    id: 2,
    Name  : 'Person 2',
    Position: 'Manager',
    Office: 'Chennai',
    Age: '45',
    StartDate: '12/05/2021',
    Salary: '60000'
  },
  {
    id: 3,
    Name : 'Person 3',
    Position: 'Manager',
    Office: 'Chennai',
    Age: '45',
    StartDate: '12/05/2021',
    Salary: '60000'
  },
]

function Table() {
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">Tables</h1>
      <Link
        to="/table/adduser"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i class="fas fa-download fa-sm text-white-50"></i> Add User
      </Link>
      <p class="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Controls</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Controls</th>
                </tr>
              </tfoot>
              <tbody>
                {tableDetails.map((detail)=>{
                  return(<tr>
                    <td>{detail.Name}</td>
                    <td>{detail.Position}</td>
                    <td>{detail.Office}</td>
                    <td>{detail.Age}</td>
                    <td>{detail.StartDate}</td>
                    <td>{detail.Salary}</td>
                    <td>
                      <Link to={`/table/${detail.id}`} className="btn btn-lg-2 mr-2 btn-primary">View</Link>
                      <Link to={`/table/${detail.id}`} className="btn btn-lg-2 mr-2 btn-success">Edit</Link>
                      <button className="btn btn-lg-2 mr-2 btn-warning">Delete</button>
                    </td>
                  </tr>)
                
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;

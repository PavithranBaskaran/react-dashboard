import React from 'react'
import { Link } from 'react-router-dom'

function AddProduct() {
  return (
    <div class="container-fluid">
    <form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Name</label>
    <input type="text" class="form-control" id="validationDefault01" placeholder='Enter the User Name' required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Position</label>
    <input type="text" class="form-control" id="validationDefault02" placeholder='Enter the Position' required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Office</label>
    <input type="text" class="form-control" id="validationDefault02" placeholder={`Enter the User's office`} required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Age</label>
    <input type="text" class="form-control" id="validationDefault02" placeholder={`Enter the User's Age`} required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">StartDate</label>
    <input type="date" class="form-control" id="validationDefault02" placeholder={`Enter the User's Start date of work`} required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Salary</label>
    <input type="number" class="form-control" id="validationDefault02" placeholder={`Enter the User's Salary`} required/>
  </div>
  <div class="col-12">
   <Link to='/product'><button class="btn btn-primary" type="submit">Submit</button></Link> 
  </div>
</form>
</div>
  )
}

export default AddProduct
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const ListEmployeeComponent = () => {
    const [employeeArray, setEmployeeArray] = useState([]);

    useEffect(() => {
        getAllEmployee();
    }, []);

    function getAllEmployee() {
        EmployeeService.getAllEmployee()
            .then(res => { setEmployeeArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }

    function deleteEmployee(e, id) {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then(() => getAllEmployee()).catch(e => console.log(e));
    }

    return (
        <div className='container'>
            <Link to={"/add-employee"} className='btn btn-primary mb-2 mt-3'>Add Employee</Link>
            <h2 className='text-center mb-4'>List Employee</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Full Name</th>
                        <th>Mobile Number</th>
                        <th>Department</th>
                        <th>Photo ID</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>District</th>
                        <th>Tehsil</th>
                        <th>City</th>
                        <th>Pin Code</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>User ID</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeArray.map(employee => (
                        <tr key={employee.empId}>
                            <td>{employee.empId}</td>
                            <td>{employee.empFullName}</td>
                            <td>{employee.empMobile}</td>
                            <td>{employee.empDepartment}</td>
                            <td>{employee.empPhotoId}</td>
                            <td>{employee.empAddLine1}</td>
                            <td>{employee.empAddLine2}</td>
                            <td>{employee.empDistrict}</td>
                            <td>{employee.empTehsil}</td>
                            <td>{employee.empCity}</td>
                            <td>{employee.empPinCode}</td>
                            <td>{employee.empStartDate}</td>
                            <td>{employee.empEndDate}</td>
                            <td>{employee.empDesignation}</td>
                            <td>{employee.empSalary}</td>
                            <td>{employee.empUserId}</td>
                            <td>{employee.empPassword}</td>
                            <td>
                                <Link to={`/add-employee/${employee.empId}`} className='btn btn-info mr-2'>Update</Link>
                                <button onClick={(e) => deleteEmployee(e, employee.empId)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;

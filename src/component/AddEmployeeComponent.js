import React, { useState, useEffect } from 'react';
import EmployeeService from '../service/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const [empFullName, setEmpFullName] = useState('');
    const [empMobile, setEmpMobile] = useState('');
    const [empDepartment, setEmpDepartment] = useState('');
    const [empPhotoId, setEmpPhotoId] = useState('');
    const [empAddLine1, setEmpAddLine1] = useState('');
    const [empAddLine2, setEmpAddLine2] = useState('');
    const [empDistrict, setEmpDistrict] = useState('');
    const [empTehsil, setEmpTehsil] = useState('');
    const [empCity, setEmpCity] = useState('');
    const [empPinCode, setEmpPinCode] = useState('');
    const [empStartDate, setEmpStartDate] = useState('');
    const [empEndDate, setEmpEndDate] = useState('');
    const [empDesignation, setEmpDesignation] = useState('');
    const [empSalary, setEmpSalary] = useState('');
    const [empUserId, setEmpUserId] = useState('');
    const [empPassword, setEmpPassword] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    const employeeData = {
        empFullName, empMobile, empDepartment, empPhotoId, empAddLine1, empAddLine2,
        empDistrict, empTehsil, empCity, empPinCode, empStartDate, empEndDate,
        empDesignation, empSalary, empUserId, empPassword
    };

    const saveEmployee = (e) => {
        e.preventDefault();

        if (Object.values(employeeData).every(value => value !== "")) {
            if (id) {
                EmployeeService.updateEmployee(id, employeeData)
                    .then(() => navigate("/employee"))
                    .catch(e => console.log(e));
            } else {
                EmployeeService.saveEmployee(employeeData)
                    .then(() => navigate("/employee"))
                    .catch(e => console.log(e));
            }
        } else {
            alert("Please, fill in all inputs");
        }
    };

    const tile = () => id ? "Update Employee" : "Add Employee";

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id)
                .then(res => {
                    const { empFullName, empMobile, empDepartment, empPhotoId, empAddLine1, empAddLine2,
                        empDistrict, empTehsil, empCity, empPinCode, empStartDate, empEndDate,
                        empDesignation, empSalary, empUserId, empPassword } = res.data;
                    setEmpFullName(empFullName);
                    setEmpMobile(empMobile);
                    setEmpDepartment(empDepartment);
                    setEmpPhotoId(empPhotoId);
                    setEmpAddLine1(empAddLine1);
                    setEmpAddLine2(empAddLine2);
                    setEmpDistrict(empDistrict);
                    setEmpTehsil(empTehsil);
                    setEmpCity(empCity);
                    setEmpPinCode(empPinCode);
                    setEmpStartDate(empStartDate);
                    setEmpEndDate(empEndDate);
                    setEmpDesignation(empDesignation);
                    setEmpSalary(empSalary);
                    setEmpUserId(empUserId);
                    setEmpPassword(empPassword);
                })
                .catch(e => console.log(e));
        }
    }, [id]);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{tile()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empFullName} onChange={(e) => setEmpFullName(e.target.value)} type="text" placeholder='Enter Full Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empMobile} onChange={(e) => setEmpMobile(e.target.value)} type="text" placeholder='Enter Mobile' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empDepartment} onChange={(e) => setEmpDepartment(e.target.value)} type="text" placeholder='Enter Department' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empPhotoId} onChange={(e) => setEmpPhotoId(e.target.value)} type="text" placeholder='Enter Photo ID' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empAddLine1} onChange={(e) => setEmpAddLine1(e.target.value)} type="text" placeholder='Enter Address Line 1' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empAddLine2} onChange={(e) => setEmpAddLine2(e.target.value)} type="text" placeholder='Enter Address Line 2' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empDistrict} onChange={(e) => setEmpDistrict(e.target.value)} type="text" placeholder='Enter District' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empTehsil} onChange={(e) => setEmpTehsil(e.target.value)} type="text" placeholder='Enter Tehsil' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empCity} onChange={(e) => setEmpCity(e.target.value)} type="text" placeholder='Enter City' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empPinCode} onChange={(e) => setEmpPinCode(e.target.value)} type="text" placeholder='Enter Pin Code' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empStartDate} onChange={(e) => setEmpStartDate(e.target.value)} type="date" placeholder='Enter Start Date' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empEndDate} onChange={(e) => setEmpEndDate(e.target.value)} type="date" placeholder='Enter End Date' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empDesignation} onChange={(e) => setEmpDesignation(e.target.value)} type="text" placeholder='Enter Designation' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empSalary} onChange={(e) => setEmpSalary(e.target.value)} type="number" placeholder='Enter Salary' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empUserId} onChange={(e) => setEmpUserId(e.target.value)} type="email" placeholder='Enter User ID' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control' value={empPassword} onChange={(e) => setEmpPassword(e.target.value)} type="password" placeholder='Enter Password' />
                                </div>
                                <button onClick={(e) => saveEmployee(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/employee"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeComponent;

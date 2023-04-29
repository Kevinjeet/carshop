import React, {useState} from 'react'

function SalespersonForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employeeID, setEmployeeID] = useState('')

    const firstNameChange = (event) => {
        setFirstName(event.target.value)
    }
    const lastNameChange = (event) => {
        setLastName(event.target.value)
    }
    const employeeidChange = (event) => {
        setEmployeeID(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data={}
        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeID;

        const salespersonUrl = "http://localhost:8090/api/salespeople/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(salespersonUrl, fetchConfig)
        if (response.ok) {
            const newSalesperson = await response.json();
            console.log(newSalesperson);
            setFirstName('');;
            setLastName('');
            setEmployeeID('');
        }
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Salesperson</h1>
                    <form onSubmit={handleSubmit} id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input onChange={firstNameChange}
                            placeholder="first_name"
                            required type="text"
                            name="first_name" id="first_name"
                            className="form-control" value={firstName} />
                            <label htmlFor="first_name">First name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={lastNameChange}
                            placeholder="last_name"
                            required type="text"
                            name="last_name" id="last_name"
                            className="form-control" value={lastName} />
                            <label htmlFor="last_name">Last name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={employeeidChange}
                            placeholder="employee_id"
                            required type="text"
                            name="employee_id" id="employee_id"
                            className="form-control" value={employeeID} />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default SalespersonForm

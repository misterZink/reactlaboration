import { useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
    const [employees, setEmployees] = useState([
        {
            name: "Yazeen Jasim",
            email: "test@mail.com",
            phone: "070000000",
            skills: "React, Javascript, C++, Java, Python, GCP",
            avatar: "https://i.imgur.com/t9HFQvX.png",
        },
        {
            name: "Geralt Of Rivia",
            email: "test@mail.com",
            phone: "070000000",
            skills: "Angular, CSS, HTML, Javascript",
            avatar: "https://i.imgur.com/Q9qFt3m.png",
        },
        {
            name: "Yennefer Of Vengerberg",
            email: "test@mail.com",
            phone: "070000000",
            skills: "Go, Python, Nodejs",
            avatar: "https://i.imgur.com/ebHfuth.png",
        },
    ]);

    function handleAddNewEmp() {
        setEmployees((prevState) => {
            return [
                ...prevState,
                {
                    name: "Triss Merigold",
                    email: "yazeenj@outlook.com",
                    phone: "070000000",
                    skills: "Vue, Firebase, Git, C#",
                    avatar: "https://i.imgur.com/TUhCrsY.png",
                },
            ];
        });
    }
    return (
        <div>
            <h3>EmployeeList</h3>
            <button onClick={handleAddNewEmp} className="button">
                Add Employee
            </button>
            {employees.map((employee) => (
                <Employee key={employee.name} EmployeeData={employee} />
            ))}
        </div>
    );
}

export default EmployeeList;

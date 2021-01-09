import React, { useState } from "react";
import "./SelectEmployee.css";

function SelectEmployee(props) {
  const { departmets } = props;
  const [activeDepartment, setActiveDepartment] = useState([]);
  const [peoples, setPeople] = useState({ people: [] });
  function getActiveDepartment(event) {
    setActiveDepartment({ activeDepartment: event.target.value });
    const employee = activeDepartment.activeDepartment
    fetch(
        `https://cors-anywhere.herokuapp.com/portal-employee-service.herokuapp.com/evaluation/department/${activeDepartment.activeDepartment}`
      )
        .then((res) => res.json())
        .then((result) => {
          setPeople({ people: result });
        });
  }
  console.log(peoples.people)
  return (
    <div className="selectEmployee">
      <select onChange={getActiveDepartment}>
        {departmets.map((item) => (
          <option>{item.department}</option>
        ))}
      </select>
      <select>
          {peoples.people.map(item=>
            <option>
                {item.firstName}
            </option>)}
      </select>
    </div>
  );
}

export default SelectEmployee;

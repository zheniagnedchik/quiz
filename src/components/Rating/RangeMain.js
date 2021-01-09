import React, { useState,useEffect } from "react";
import "./Range.css";
import Header from '../Quiz/Header/Header'
import HeaderTitle from './HeaderTitle/HeaderTitle'
import BattonGroupCriteria from './BattonGroupCriteria/BattonGroupCriteria'
import SelectEmployee from './SelectEmployee/SelectEmployee'

function RangeMain(){
  const [criteriaActive, setCriteriaActive]=useState(true)
  const [departaments, setDepartaments] = useState({ departament: [] });
  function setCriteriaQuality(){
    setCriteriaActive(true)
  }
  function setCriteriaCondions(){
    setCriteriaActive(false)
  }
  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://portal-employee-service.herokuapp.com/evaluation/department"
    )
      .then((res) => res.json())
      .then((result) => {
        setDepartaments({ departament: result });
      });
  }, []);
  
  return(
    <div className="RangeMain">
      <Header/>
      <HeaderTitle/>
      <BattonGroupCriteria criteriaActive={criteriaActive} setCriteriaQuality={setCriteriaQuality} setCriteriaCondions={setCriteriaCondions}/>
      <div className="rangeContainer">
        <SelectEmployee departmets={departaments.departament}/>
      </div>

    </div>
  )
}

export default RangeMain

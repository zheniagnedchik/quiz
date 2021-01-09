import { useState } from 'react'
import './BattonGroupCriteria.css'
import classnames from 'classnames'


function BattonGroupCriteria(props){
    const {criteriaActive, setCriteriaCondions,setCriteriaQuality}=props
    return (
        <div className="BattonGroupCriteria">
        <button className={classnames("buttonQuality",{"buttonActive":criteriaActive})} onClick={setCriteriaQuality}>Оценка качества  работы</button>
        <button className={classnames("buttonConditions",{"buttonActive":!criteriaActive})} onClick={setCriteriaCondions}>Оценка условий труда</button>
        </div>
    )
}

export default BattonGroupCriteria
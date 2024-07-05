import React from 'react'
import Nestednavbar from '../Nestednavbar/Nestednavbar2'
import DoctorMainCard from './DoctorMainCard'
import Filter from './Filter'
import './FilterPage.css'

const FilterPage = () => {
  return (
    <>
      <Nestednavbar/> 
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-3 filter-edit">
            <Filter />
          </div>
          <div className="col-7 doctorMainCard-edit">
            <DoctorMainCard />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  )
}

export default FilterPage

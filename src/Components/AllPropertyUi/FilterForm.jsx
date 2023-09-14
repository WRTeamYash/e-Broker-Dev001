import { translate } from '@/utils'
import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { RiSendPlane2Line } from 'react-icons/ri'

const FiletrForm = () => {
  return (
    <div className="card" id='filter-card'>
      <div className="card title" id='filter-title'>
        <span>
         {translate("filterProp")}
        </span>
        <button>
          {translate("clearFilter")}
        </button>
      </div>
      <div className="card-body">
        <div className='filter-button-box'>
          <ButtonGroup id='propertie_button_grup'>
            <ul className="nav nav-tabs" id="props-tabs">
              <li className="">
                <a className="nav-link active" aria-current="page" id="prop-sellbutton" onClick={(e) => {
                  e.target.classList.add('active')
                  document.getElementById('prop-rentbutton').classList.remove('active')
                }}>{translate("forSell")}</a>
              </li>
              <li className="">
                <a className="nav-link" onClick={(e) => {
                  e.target.classList.add('active')
                  document.getElementById('prop-sellbutton').classList.remove('active')

                }} aria-current="page" id="prop-rentbutton">{translate("forRent")}</a>
              </li>
            </ul>
          </ButtonGroup>
        </div>
        <div className='prop-type'>
          <span>{translate("propTypes")}</span>
          <select className="form-select" aria-label="Default select">
            <option value="" defaultValue>Select Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className='prop-location'>
          <span>{translate("selectYourLocation")}</span>
          <select className="form-select" aria-label="Default select">
            <option defaultValue >Select Location (Optional)</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className='budget-price'>
          <span>{translate("budget")}</span>
          <div className='budget-inputs'>
            <input className='price-input' placeholder='Min Price' />
            <input className='price-input' placeholder='Max Price' />
          </div>
        </div>
        <div className='posted-since'>
          <span>{translate("postedSince")}</span>
          <div className='posted-duration'>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {translate("anytime")}
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                {translate("lastWeek")}
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                {translate("yesterday")}
              </label>
            </div>
          </div>
        </div>
        <div className='apply-filter'>
          <RiSendPlane2Line size={25} />
          <button id='apply-filter-button'>
            {translate("applyFilter")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FiletrForm

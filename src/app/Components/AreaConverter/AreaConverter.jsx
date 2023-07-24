import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiCloseCircleLine } from 'react-icons/ri';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const AreaConverter = ({ isOpen, onClose }) => {

    const [value, setValue] = useState('');
    const [fromUnit, setFromUnit] = useState('squareFeet');
    const [toUnit, setToUnit] = useState('squareMeter');
    const [convertedValue, setConvertedValue] = useState('');

    const unitData = {
        squareFeet: { name: 'Square Feet', convertFactor: 0.092903 },
        squareMeter: { name: 'Square Meter', convertFactor: 10.763915 },
        acre: { name: 'Acre', convertFactor: 0.00002295 },
        hectare: { name: 'Hectare', convertFactor: 0.000009 },
        gaj: { name: 'Gaj', convertFactor: 0.112188 },
        bigha: { name: 'Bigha', convertFactor: 0.000037 },
        cent: { name: 'Cent', convertFactor: 0.002296 },
        katha: { name: 'Katha', convertFactor: 0.000735 },
        guntha: { name: 'Guntha', convertFactor: 0.0009182 },
    };

    const handleValueChange = (event) => {
        setValue(event.target.value);
    };

    const handleFromUnitChange = (event) => {
        setFromUnit(event.target.value);
        setConvertedValue('');
    };

    const handleToUnitChange = (event) => {
        setToUnit(event.target.value);
        setConvertedValue('');
    };

    const convertValue = () => {
        const convertFactorFrom = unitData[fromUnit].convertFactor;
        const convertFactorTo = unitData[toUnit].convertFactor;

        if (convertFactorFrom && convertFactorTo) {
            const converted =
                (parseFloat(value) * convertFactorFrom) / convertFactorTo;
            setConvertedValue(converted.toFixed(2));
        }
    };




    return (
        <div id='login-modal'>

            <Modal show={isOpen} onHide={onClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Area Converter</Modal.Title>
                    <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-body-heading'>
                        <h4>Convert Sq. ft to Sq. m</h4>
                        <span>
                            Enter the value and select desired unit
                        </span>
                    </div>
                    <div>
                        <label>
                            from:
                            <input
                                type="number"
                                value={value}
                                onChange={handleValueChange}
                                placeholder="Enter the value"
                            />
                        </label>

                       
                            <select value={fromUnit} onChange={handleFromUnitChange}>
                            <option value="">Select unit</option>
                                {Object.keys(unitData).map((unitKey) => (
                                    <option key={unitKey} value={unitKey}>
                                        {unitData[unitKey].name}
                                    </option>
                                ))}
                            </select>
               
                        <label>
                            Convert to:
                            <select value={toUnit} onChange={handleToUnitChange}>
                                {Object.keys(unitData).map((unitKey) => (
                                    <option key={unitKey} value={unitKey}>
                                        {unitData[unitKey].name}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <button onClick={convertValue}>Convert</button>

                        {convertedValue && (
                            <p>
                                {/* {value} {unitData[fromUnit].name} is equal to  */}
                                {convertedValue}{' '}
                                {unitData[toUnit].name}
                            </p>
                        )}
                    </div>
                </Modal.Body>
            </Modal >
        </div>
    );
};

export default AreaConverter;

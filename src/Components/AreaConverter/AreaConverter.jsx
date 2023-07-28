import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiCloseCircleLine } from 'react-icons/ri';

const AreaConverter = ({ isOpen, onClose }) => {

    const [value, setValue] = useState('');
    const [fromUnit, setFromUnit] = useState('squareFeet');
    const [toUnit, setToUnit] = useState('squareMeter');
    const [convertedValue, setConvertedValue] = useState("");

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
        // setConvertedValue(true);
    };




    return (
        <div id='areaConvert-modal'>

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
                    <div className='area-conrt-fields'>
                        <div className='sq-ft'>
                            <label>
                                from:
                            </label>
                            <div className="btn-group" role="group">

                                <input
                                    type="number"
                                    value={value}
                                    onChange={handleValueChange}
                                    placeholder="Enter the value"
                                    id='number-input'

                                />
                                <select value={fromUnit} onChange={handleFromUnitChange} id='sq-ft-slct'>

                                    {Object.keys(unitData).map((unitKey) => (
                                        <option key={unitKey} value={unitKey}>
                                            {unitData[unitKey].name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='sq-ft'>

                            <label>
                                to:
                            </label>
                            <div>

                                <select
                                    // value={toUnit} 
                                    onChange={handleToUnitChange}
                                    id='sq-m'>
                                    <option value="">Choose Value</option>
                                    {Object.keys(unitData).map((unitKey) => (
                                        <option key={unitKey} value={unitKey}>
                                            {unitData[unitKey].name}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                    </div>

                    { convertedValue && convertedValue && ( 
                        <div id='show-value'>
                            <span className='convert-value'>
                                {/* {value} {unitData[fromUnit].name} is equal to  */}
                                {convertedValue}{''} 
                                {unitData[toUnit].name}
                            </span>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer className='area-footer'>
                    <button className='convert-button' onClick={convertValue}>Convert</button>

                </Modal.Footer>
            </Modal >
        </div>
    );
};

export default AreaConverter;

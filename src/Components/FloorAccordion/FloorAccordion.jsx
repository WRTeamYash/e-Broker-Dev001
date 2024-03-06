import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

const CustomToggle = ({ children, eventKey, isOpen, onToggle }) => {
    return (
        <div
            className={`custom-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => onToggle(eventKey)}
        >
            {/* Customize the icons and styles here */}
            {isOpen ? (
                <div className="toggle-icon-minus"> <FaMinus /></div>

            ) : (
                <div className="toggle-icon-plus"><FaPlus /></div>
            )
            }
        </div>
    );
};

const FloorAccordion = () => {
    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (eventKey) => {
        setActiveKey(activeKey === eventKey ? null : eventKey);
    };

    return (
        <>
            <Accordion activeKey={activeKey} onSelect={handleToggle}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <span>
                            floor 1
                        </span>
                        <CustomToggle eventKey="0" isOpen={activeKey === '0'} onToggle={handleToggle} />
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                <Accordion.Header>
                        <span>
                            floor 2
                        </span>
                        <CustomToggle eventKey="1" isOpen={activeKey === '1'} onToggle={handleToggle} />
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default FloorAccordion;

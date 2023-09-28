import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { translate } from '@/utils';
import { GetCategorieApi } from '@/store/actions/campaign';
import GoogleMapBox from '../Location/GoogleMapBox';
import Dropzone from 'react-dropzone';
import  FilePreview from 'react-dropzone-uploader';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AddPropertyTabs() {
    const [value, setValue] = React.useState(0);
    const [getCategories, setGetCategories] = React.useState([]);
    const handleDrop = React.useCallback((acceptedFiles) => {
        // Handle the dropped files
        console.log('Accepted Files:', acceptedFiles);
    }, []);

    React.useEffect(() => {
        GetCategorieApi(
            (response) => {
                const categoryData = response && response.data;

                setGetCategories(categoryData);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{}}>
                    <Tab label="Property Details" {...a11yProps(0)} />
                    <Tab label="Facilities" {...a11yProps(1)} />
                    <Tab label="Location" {...a11yProps(2)} />
                    <Tab label="Images & Video" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <form>
                    <div className="row" id='add_prop_form_row'>
                        <div className="col-sm-12 col-md-6">

                            <div id='add_prop_form'>
                                <div className="add_prop_fields">
                                    <span>Property Type</span>
                                    <div className="add_prop_types">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                                value="sell"

                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Sell
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                value="rent"

                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Rent
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="add_prop_fields">
                                    <span>Category</span>
                                    <select className="form-select" aria-label="Default select" name="propType" value="">
                                        <option value="">Select Category</option>
                                        {/* Add more options as needed */}
                                        {getCategories && getCategories?.map((ele, index) => (
                                            <option key={index} value={ele.id}>{ele.category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="add_prop_fields">
                                    <span>Title</span>
                                    <input type="text" id='prop_title_input' placeholder='Enter Property Title' />
                                </div>
                                <div className="add_prop_fields">
                                    <span>Price</span>
                                    <input type="number" id='prop_title_input' placeholder='Enter Property Price ($)' />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="add_prop_fields">
                                <span>Property Description</span>
                                <textarea rows={13} id="about_prop" placeholder='Enter About Property' />
                            </div>
                        </div>
                    </div>

                    <div className="nextButton">
                        <button type='button'>Next</button>
                    </div>
                </form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <form>
                    <div className="row" id='add_prop_form_row'>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Bedroom</span>
                                <input type='number' id="prop_title_input" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Bathrooms</span>
                                <input type='number' id="prop_title_input" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Kitchen</span>
                                <input type='number' id="prop_title_input" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Garage</span>
                                <input type='number' id="prop_title_input" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Parking</span>
                                <input type='number' id="prop_title_input" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>CCTV</span>
                                <input type='number' id="prop_title_input" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Fitness</span>
                                <input type='number' id="prop_title_input" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Wifi</span>
                                <input type='number' id="prop_title_input" />
                            </div>
                        </div>
                    </div>
                    <div className="nextButton">
                        <button type='button'>Next</button>
                    </div>
                </form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <form>
                    <div className="row" id='add_prop_form_row'>
                        <div className="col-sm-12 col-md-6">
                            <div className='row' id='add_prop_form_row'>
                                <div className="col-sm-12 col-md-6">
                                    <div className="add_prop_fields">
                                        <span>City</span>
                                        <input type="text" id='prop_title_input' placeholder='Enter City' />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="add_prop_fields">
                                        <span>State</span>
                                        <input type="text" id='prop_title_input' placeholder='Enter State' />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="add_prop_fields">
                                        <span>Country</span>
                                        <input type="text" id='prop_title_input' placeholder='Enter Country' />
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="add_prop_fields">
                                        <span>Client Address</span>
                                        <textarea rows={4} id="about_prop" placeholder='Enter Client Address' />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="add_prop_fields">
                                        <span>Address</span>
                                        <textarea rows={4} id="about_prop" placeholder='Enter Full Address' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="map">
                                <GoogleMapBox />
                            </div>
                        </div>
                    </div>

                    <div className="nextButton">
                        <button type='button'>Next</button>
                    </div>
                </form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <form>
                    <div className="row" id='add_prop_form_row'>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Title Image</span>
                                <Dropzone
                                    onDrop={handleDrop}
                                    accept="image/*" // Define the file type(s) you want to accept
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <div {...getRootProps()} className="dropzone">
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop an image here, or click to select an image</p>
                                        </div>
                                    )}
                                </Dropzone>
                                {/* Show file previews */}
                                <FilePreview />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>3D Imagee</span>
                                <input type="file" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Gallary Images</span>
                                <input type="file" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Video Link</span>
                                <input type="input" id='prop_title_input' placeholder='Eneter Video' />
                            </div>
                        </div>
                    </div>

                    <div className="nextButton">
                        <button type='button'>Next</button>
                    </div>
                </form>
            </CustomTabPanel>
        </Box>
    );
}
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Badge } from 'react-bootstrap';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { settingsData } from '@/store/reducer/settingsSlice';





export default function PropertyListingTable({ data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  console.log(data)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const priceSymbol = useSelector(settingsData)
  const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol
  // const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead sx={{
          background: "#f5f5f5",
        }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "600" }}>Listing title</TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">Category</TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">Views</TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">Posted On</TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">Status</TableCell>
            <TableCell sx={{ fontWeight: "600" }} align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" sx={{ width: "40%" }}>

                <div className="card" id='listing_card'>
                  <div className="listing_card_img">
                    <img src={e.title_image} alt="" id='main_listing_img' />
                    <span className='listing_type_tag'>
                      {e.propery_type}
                    </span>
                  </div>
                  <div className="listing_card_body">
                    <span className='listing_prop_title'>{e.title}
                    </span>
                    <span className='listing_prop_loc'>
                      {e.city} {e.state} {e.country}
                    </span>
                    <span className='listing_prop_pirce'>
                      {CurrencySymbol} {e.price}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell align="center">{e.category.category}</TableCell>
              <TableCell align="center">{e.total_view}</TableCell>
              <TableCell align="center">{e.post_created}</TableCell>
              <TableCell align="center">
                {e.status === 1 ? (
                  <span className='active_status'>Active</span>
                ) : (
                  <span className='inactive_status'>Inactive</span>
                )}
              </TableCell>
              <TableCell align="center">
                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <IconButton size='medium'>
                      <EditIcon />
                    </IconButton>
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
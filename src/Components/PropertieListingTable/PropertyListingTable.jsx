import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, Dropdown, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { settingsData } from "@/store/reducer/settingsSlice";
import { useRouter } from "next/router";
import { BsThreeDotsVertical } from "react-icons/bs";
import ReactPagination from "../Pagination/ReactPagination";


export default function PropertyListingTable({ data, handlePageChange, total, limit }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const priceSymbol = useSelector(settingsData);
  const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol;
  const router = useRouter();

  const handleClickEdit = (propertyId) => {
    // e.preventDefault()
    // handleClose();
    console.log("property id when i click on edit:", propertyId);
    // router.push(`/user/edit-property?id=${propertyId}`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead
            sx={{
              background: "#f5f5f5",
            }}
          >
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }}>Listing title</TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">
                Category
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">
                Views
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">
                Posted On
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((elem, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" sx={{ width: "40%" }}>
                    {/* {console.log(elem.id)} */}
                    <div className="card" id="listing_card">
                      <div className="listing_card_img">
                        <img
                          src={elem.title_image}
                          alt=""
                          id="main_listing_img"
                        />
                        <span className="listing_type_tag">
                          {elem.propery_type}
                        </span>
                      </div>
                      <div className="listing_card_body">
                        <span className="listing_prop_title">{elem.title}</span>
                        <span className="listing_prop_loc">
                          {elem.city} {elem.state} {elem.country}
                        </span>
                        <span className="listing_prop_pirce">
                          {CurrencySymbol} {elem.price}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">{elem.category.category}</TableCell>
                  <TableCell align="center">{elem.total_view}</TableCell>
                  <TableCell align="center">{elem.post_created}</TableCell>
                  <TableCell align="center">
                    {elem.status === 1 ? (
                      <span className="active_status">Active</span>
                    ) : (
                      <span className="inactive_status">Inactive</span>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {/* <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{ borderRadius: "8px", background: "#f5f5f5", color: "#000" }}
                    >
                    <MoreVertIcon />
                  </IconButton> */}

                    <Dropdown
                      visible={anchorEl === index}
                      onVisibleChange={(visible) => {
                        if (visible) {
                          setAnchorEl(index);
                        } else {
                          setAnchorEl(null);
                        }
                      }}
                      overlay={(
                        <Menu>
                          <Menu.Item key="edit">
                            <Button
                              type="text"
                              icon={<EditOutlined />}
                              onClick={() => handleClickEdit(elem.id)}
                            >
                              Edit
                            </Button>
                          </Menu.Item>
                          <Menu.Item key="delete">
                            <Button
                              type="text"
                              icon={<DeleteOutlined />}
                              onClick={() => handleClose(index)}
                            >
                              Delete
                            </Button>
                          </Menu.Item>
                        </Menu>
                      )}
                    >
                      <Button id="simple-menu"><BsThreeDotsVertical /></Button>
                    </Dropdown>

                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <p>No Data Available</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {data.length > 0 ? (
        <div className="col-12">
          <ReactPagination pageCount={Math.ceil(total / limit)} onPageChange={handlePageChange} />
        </div>
      ) : null}
    </>

  );
}

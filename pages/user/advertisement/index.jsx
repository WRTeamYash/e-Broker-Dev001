import VerticleLayout from "@/Components/AdminLayout/VerticleLayout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { GetFeturedListingsApi } from "@/store/actions/campaign";
import toast from "react-hot-toast";
import { settingsData } from "@/store/reducer/settingsSlice";
import { useSelector } from "react-redux";
import ReactPagination from "@/Components/Pagination/ReactPagination.jsx";
import Loader from "@/Components/Loader/Loader";
import { FaCrown } from 'react-icons/fa';
const index = () => {
  const limit = 8;


  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [view, setView] = useState(0);
  const [offsetdata, setOffsetdata] = useState(0);

  const isLoggedIn = useSelector((state) => state.User_signup);
  const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
  const priceSymbol = useSelector(settingsData);
  const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol;

  // api call
  useEffect(() => {
    setIsLoading(true);
    GetFeturedListingsApi(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      offsetdata.toString(),
      limit.toString(),
      isLoggedIn ? userCurrentId : "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "1",
      (response) => {
        setTotal(response.total);
        setView(response.total_clicks);
        const FeaturedListingData = response.data;
        // console.log(FeaturedListingData)
        setIsLoading(false);
        setData(FeaturedListingData);
        // console.log("advertisement Data", Data)
      },
      (error) => {
        setIsLoading(false);
        console.log(error);
      }
    );
  }, [offsetdata, isLoggedIn]);



  const handlePageChange = (selectedPage) => {

    const newOffset = selectedPage.selected * limit;
    setOffsetdata(newOffset);
    window.scrollTo(0, 0);
    // console.log("new offset", newOffset)
    // console.log("limit", limit)
  };

  return (
    <VerticleLayout>
      <div className="container">
        <div className="tranction_title">
          <h1>My Advertisement</h1>
        </div>


        <div className="table_content card bg-white">
          <TableContainer
            component={Paper}
            sx={{
              background: "#fff",
              padding: "10px",
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead
                sx={{
                  background: "#f5f5f5",
                }}
              >
                <TableRow>
                  <TableCell sx={{ fontWeight: "600" }}>Listing title</TableCell>
                  <TableCell sx={{ fontWeight: "600" }} align="center">
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }} align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      {/* Centered loader */}
                      <div>
                        <Loader />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  Data.length > 0 ? (
                    Data.map((elem, index) => (
                      <TableRow key={index}>
                        {console.log(elem.advertisement[0].status)}
                        <TableCell component="th" scope="row" sx={{ width: "40%" }}>
                          <div className="card" id="listing_card">
                            <div className="listing_card_img">
                              <img
                                src={elem.title_image}
                                alt=""
                                id="main_listing_img"
                              />
                              <span className="listing_type_feature_tag">
                                <FaCrown />
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

                        <TableCell align="center">
                          {elem.advertisement[0].status === 0 ? (
                            <span className="active_status">Approved</span>
                          ) : elem.advertisement[0].status === 1 ? (
                            <span className="panding_status">Pending</span>
                          ) : (
                            <span className="inactive_status">Rejected</span>
                          )}

                        </TableCell>
                        <TableCell align="center">{elem.advertisement[0].type}</TableCell>

                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} align="center">
                        <p>No Data Available</p>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>



          {Data.length > 0 ? (
            <div className="col-12">
              <ReactPagination pageCount={Math.ceil(total / limit)} onPageChange={handlePageChange} />
            </div>
          ) : null}

        </div>

      </div>
    </VerticleLayout>
  );
};

export default index;

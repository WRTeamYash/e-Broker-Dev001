import VerticleLayout from "@/Components/AdminLayout/VerticleLayout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getPaymentDetialsApi } from "@/store/actions/campaign";
import toast from "react-hot-toast";
import { settingsData } from "@/store/reducer/settingsSlice";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import TablePagination from '../../../src/Components/Pagination/TablePagination.jsx'

const index = () => {
    const [Data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const systemsettings = useSelector(settingsData);

    const currency = systemsettings?.currency_symbol;
    const dataPerPage = 10; // number of posts per page
    const pagesVisited = currentPage * dataPerPage;

    // handle page change
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    // api call
    useEffect(() => {
        getPaymentDetialsApi(
            (res) => {
                setData(res.data);
            },
            (err) => {
                toast.error(err.message);
            }
        );
    }, []);

    // format date
    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }

    // slice the array to get the current posts
    const currentData = Data.slice(pagesVisited, pagesVisited + dataPerPage);

    return (
        <VerticleLayout>
            <div className="container">
                <div className="tranction_title">
                    <h1>Transaction History</h1>
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
                                    background: "#f5f5f4",
                                    borderRadius: "12px"
                                }}
                            >
                                <TableRow sx={{
                                    // padding:"20px",
                                    background: "#f5f5f5",

                                }}>
                                    <TableCell sx={{ fontWeight: "600" }} align="center">
                                        ID
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "600" }} align="center">
                                        Transaction ID
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "600" }} align="center">
                                        Date
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "600" }} align="center">
                                        Price
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "600" }} align="center">
                                        Status
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentData.length > 0 ? (
                                    currentData.map((elem, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="center">{elem.id}</TableCell>
                                            <TableCell align="center">{elem.transaction_id}</TableCell>
                                            <TableCell align="center">{formatDate(elem.created_at)}</TableCell>
                                            <TableCell align="center">
                                                {currency}
                                                {elem.amount}
                                            </TableCell>
                                            {elem.status === "1" ? (
                                                <TableCell sx={{ fontWeight: "600" }} align="center">
                                                    <span className="success">Success</span>
                                                </TableCell>
                                            ) : (
                                                <TableCell sx={{ fontWeight: "600" }} align="center">
                                                    <span className="fail">Fail</span>
                                                </TableCell>
                                            )}
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

                        {/* <div className="col-12">
                            <TablePagination pageCount={Math.ceil(Data.length / dataPerPage)} onPageChange={handlePageChange} />
                        </div> */}
                        <ReactPaginate
                            previousLabel={"previous"}
                            nextLabel={"next"}
                            pageCount={Math.ceil(Data.length / dataPerPage)}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination"}
                            previousLinkClassName={"pagination__link"}
                            nextLinkClassName={"pagination__link"}
                            disabledClassName={"pagination__link--disabled"}
                            activeClassName={"pagination__link--active"}
                        />
                    </TableContainer>
                </div>
            </div>
        </VerticleLayout>
    );
};

export default index;
"use client"

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getIntrestedUserApi, getPaymentDetialsApi } from "@/store/actions/campaign";
import toast from "react-hot-toast";
import { settingsData } from "@/store/reducer/settingsSlice";
import { useSelector } from "react-redux";
import Pagination from "@/Components/Pagination/ReactPagination";
import { translate } from "@/utils/index.js";
import { languageData } from "@/store/reducer/languageSlice.js";
import Loader from "@/Components/Loader/Loader";
import dynamic from "next/dynamic.js";
const VerticleLayout = dynamic(() => import('../../../src/Components/AdminLayout/VerticleLayout.jsx'), { ssr: false })

const IntrestedUsers = () => {

    const lang = useSelector(languageData);
    const [Data, setData] = useState([]);

    const [total, setTotal] = useState(0);
    const [offsetdata, setOffsetdata] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const limit = 10;

    useEffect(() => { }, [lang]);
    // api call
    useEffect(() => {
        setIsLoading(true)
        getIntrestedUserApi({
            property_id: "",
            onSuccess: (res) => {
                setTotal(res.total)
                setData(res.data)
                setIsLoading(false)

            },
            onError: (err) => {
                toast.error(err.message);
            }
        });

    }, []);
    // handle page change
    const handlePageChange = (selectedPage) => {
        const newOffset = selectedPage.selected * limit;
        setOffsetdata(newOffset);
        window.scrollTo(0, 0);
    };
    // format date
    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }


    return (
        <VerticleLayout>
            <div className="container">
                <div className="tranction_title">
                    <h1>{translate("intresteduserDetails")}</h1>
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
                                    borderRadius: "12px",
                                }}
                            >
                                <TableRow
                                    sx={{
                                        // padding:"20px",
                                        background: "#f5f5f5",
                                    }}
                                >
                                    <TableCell sx={{ fontWeight: "600" }} align="center">
                                        {translate("ID")}
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "600" }} align="center">
                                        {translate("Name")}
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "600" }} align="center">
                                        {translate("email")}
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "600" }} align="center">
                                        {translate("mobileno")}
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
                                ) : Data.length > 0 ? (
                                    Data.map((elem, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="center">id</TableCell>
                                            <TableCell align="center">Name</TableCell>
                                            <TableCell align="center">email</TableCell>
                                            <TableCell align="center">
                                                Number
                                            </TableCell>
                                            <TableCell align="center">
                                                date
                                            </TableCell>

                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">
                                            <p>{translate("noDataAvailabe")}</p>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>

                        {Data?.length > 0 ? (
                            <div id="pagination_div" className="row">
                                <div className="col-12">
                                    <Pagination pageCount={Math.ceil(total / limit)} onPageChange={handlePageChange} />
                                </div>
                            </div>
                        ) : null}
                    </TableContainer>
                </div>
            </div>
        </VerticleLayout>
    );
};

export default IntrestedUsers;

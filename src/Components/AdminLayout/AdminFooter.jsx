import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { settingsData } from '@/store/reducer/settingsSlice';

const AdminFooter = () => {

const systemsettings =  useSelector(settingsData)   
  return (
    <>
           <div className="admindash_footer">
            <span>
            Copyright @ 2023 {systemsettings.company_name}. All Rights Reserved
            </span>
           </div>
    </>
  )
}

export default AdminFooter

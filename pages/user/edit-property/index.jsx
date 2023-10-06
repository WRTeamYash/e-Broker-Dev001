import EditPropertyTabs from '@/Components/EditPropertyTabs/EditPropertyTabs'
import VerticleLayout from '@/Components/AdminLayout/VerticleLayout'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { GetFeturedListingsApi } from '@/store/actions/campaign';

const index = () => {

  return (
    <VerticleLayout>
      <div className="container">
        <div className="dashboard_titles">
          <h3>Edit Property</h3>
        </div>
        <div className="card" id='add_prop_tab'>
          <EditPropertyTabs/>
        </div>
      </div>
    </VerticleLayout>
  )
}

export default index

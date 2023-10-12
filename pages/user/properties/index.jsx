import AddPropertyTabs from '@/Components/AddPropertyTabs/AddPropertyTabs'
import VerticleLayout from '@/Components/AdminLayout/VerticleLayout'
import { translate } from '@/utils'
import React from 'react'

const index = () => {
  return (
    <VerticleLayout>
      <div className="container">
        <div className="dashboard_titles">
          <h3>{translate("addProp")}</h3>
        </div>
        <div className="card" id='add_prop_tab'>
          <AddPropertyTabs />
        </div>
      </div>
    </VerticleLayout>
  )
}

export default index

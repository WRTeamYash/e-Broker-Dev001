import React from 'react'
import EditPropertyTabs from '@/Components/EditPropertyTabs/EditPropertyTabs'
import VerticleLayout from '@/Components/AdminLayout/VerticleLayout'
import { translate } from '@/utils'


const index = () => {

  return (
    <VerticleLayout>
      <div className="container">
        <div className="dashboard_titles">
          <h3>{translate("editProp")}</h3>
        </div>
        <div className="card" id='add_prop_tab'>
          <EditPropertyTabs />
        </div>
      </div>
    </VerticleLayout>
  )
}

export default index

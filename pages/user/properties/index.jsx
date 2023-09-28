import AddPropertyTabs from '@/Components/AddPropertyTabs/AddPropertyTabs'
import VerticleLayout from '@/Components/AdminLayout/VerticleLayout'
import React from 'react'

const index = () => {
  return (
    <VerticleLayout>
      <div className="container">
        <div className="title">
          <h3>Add Property</h3>
        </div>
        <div className="card mt-5" id='add_prop_tab'>
          <AddPropertyTabs />
        </div>
      </div>
    </VerticleLayout>
  )
}

export default index

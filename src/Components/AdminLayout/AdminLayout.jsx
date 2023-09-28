import React from 'react'
import Layout from './Layout'
import VerticalNavItems from '../UserNavigation/navigation.jsx'
const AdminLayout = (props) => {

  // console.log(props)
  const { children } = props
  return (


    <Layout verticalLayoutProps={{
      navMenu: {
        navItems: VerticalNavItems()
      }
    }}>
      {children}
    </Layout>
  )
}

export default AdminLayout

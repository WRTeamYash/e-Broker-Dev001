import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import "../../public/css/style.css"
import "../../public/css/responsiveStyle.css"

const Layout = ({ children, header, footer }) => {
  return (
   <Fragment>
    <Header header={header}/>
    {children}
    {/* <Footer footer={footer} /> */}
   </Fragment>  
  )
}

export default Layout
import "../../assets/template_assets/css/style.css"
import "../../assets/template_assets/vendors/mdi/css/materialdesignicons.min.css"
import "../../assets/template_assets/vendors/flag-icon-css/css/flag-icon.min.css"
import "../../assets/template_assets/vendors/css/vendor.bundle.base.css"

import SideBar from "../layouts/Sidebar"
import Navbar from "../layouts/Navbar"

import PropTypes from "prop-types"

export default function Template({children}){
    return (
        <div className="container-scroller">

        {/* navbar */}
        <Navbar />

        <div className="container-fluid page-body-wrapper">
          
          {/* sidebar */}
            <SideBar />

          <div className="main-panel">
            <div className="content-wrapper">
              {children}
            </div>
            <footer className="footer">
              <div className="footer-inner-wraper">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                  <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
                  {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap dashboard templates</a> from Bootstrapdash.com</span> */}
                </div>
              </div>
            </footer>
          </div>
          
        </div>
      </div>
    )
}

Template.propTypes = {
    children: PropTypes.node
}
import "../../assets/template_assets/css/style.css"
import "../../assets/template_assets/vendors/mdi/css/materialdesignicons.min.css"
import "../../assets/template_assets/vendors/flag-icon-css/css/flag-icon.min.css"
import "../../assets/template_assets/vendors/css/vendor.bundle.base.css"
import LogoDark from "../../assets/template_assets/images/logo.svg"

import PropTypes from "prop-types"

export default function Auth({children, title, greeting, buttonText, termText, footerText, footerLink})
{
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth bg-dark">
                <div className="row flex-grow">
                    <div className="col-lg-4 mx-auto">
                    <div className="auth-form-dark text-left p-5 rounded-lg">
                        <div className="brand-logo">
                        <img src={LogoDark} />
                        </div>
                        <h4>{title}</h4>
                        <h6 className="font-weight-dark"> {greeting} </h6>
                        
                        <form className="pt-3">
                           {children}
                            <div className="mt-3">
                                <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"> {buttonText} </a>
                            </div>
                            <div className="my-2 d-flex justify-content-between align-items-center">
                                <div className="form-check ms-2">
                                    <label className="form-check-label text-muted" />
                                    <input type="checkbox" className="form-check-input bg-danger" />
                                        {termText}
                                </div>
                                {(buttonText == "Login") && <a href="#" className="auth-link text-light">Forgot password?</a>}
                            </div>
                            <div className="text-center mt-4 font-weight-dark"> {footerText} <a href={footerLink} className="text-primary"> {(buttonText == "Login") ? "Sign Up" : "Login"} </a>
                            </div>
                        </form>


                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

Auth.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    greeting: PropTypes.string,
    buttonText: PropTypes.string,
    termText: PropTypes.string,
    footerText: PropTypes.string,
    footerLink: PropTypes.string
}
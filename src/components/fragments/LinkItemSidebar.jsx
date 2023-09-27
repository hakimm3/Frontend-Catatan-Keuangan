import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"

export default function LinkItemSidebar({url, icon, title, isActive}){
    return (
        <li className={`nav-item ${isActive && "active"}`}>
            <Link className="nav-link" to={url}>
                <span className="icon-bg"><i className={icon}></i></span>
                <span className="menu-title">{title}</span>
            </Link>
          </li>
    )
}

LinkItemSidebar.propTypes = {
    url: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    isActive: PropTypes.bool
}


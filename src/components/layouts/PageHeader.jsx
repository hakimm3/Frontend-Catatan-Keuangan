import PropTypes from "prop-types"

const PageHeader = ({ title, children }) => {
  return (
    <div className="page-header">
      <h3 className="page-title"> {title} </h3>
       {children}
    </div>
  );
}

const BreadCrumb = ({children}) => {
    return (
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {children}
        </ol>
      </nav>
    )
}

PageHeader.BreadCrumb = BreadCrumb

export default PageHeader


PageHeader.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

BreadCrumb.propTypes = {
    children: PropTypes.node
}
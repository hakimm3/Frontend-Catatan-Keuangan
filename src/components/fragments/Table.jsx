import PropTypes from "prop-types"

export default function Table({children}){
    return (
        <table className="table table-bordered table-hover table-responsive-lg table-responsive-md table-responsive-sm">
              {children}
            </table>
    )
}

Table.propTypes = {
    children: PropTypes.node
}
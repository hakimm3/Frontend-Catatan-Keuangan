import { PropTypes } from "prop-types"

export default function InputWithouLabel({type, name, placeholder, id}){
    return (
       <div className="form-group">
         <input type={type} className="form-control" id={id} name={name} placeholder={placeholder} />
       </div>
    )
}

InputWithouLabel.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string
}
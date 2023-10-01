import PropTypes from "prop-types";
import "./navlink.css";

function NavigationLink({ label, className }) {
  return (
    <a
      href={label.toLowerCase()}
      className={`text-white hover:underline nav-link ${className}`}
    >
      {label}
    </a>
  );
}

NavigationLink.propTypes = {
  label: PropTypes.string.isRequired, // Specify that label should be a required string prop
  className: PropTypes.string.isRequired,
};
export default NavigationLink;

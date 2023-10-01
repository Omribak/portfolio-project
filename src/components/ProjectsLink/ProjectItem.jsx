import { FiExternalLink } from "react-icons/fi";
import PropTypes from "prop-types";

function ProjectItem({ Name, Link, Image, Description }) {
  return (
    <div className="work">
      <img src={Image} />
      <div className="layer">
        <h3>{Name}</h3>
        <p>{Description}</p>
        <a href={Link} className="link">
          <FiExternalLink size={30} />
        </a>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  Name: PropTypes.string.isRequired, // Specify that label should be a required string prop
  Link: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
};

export default ProjectItem;

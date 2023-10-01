import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./footer.css";

function Footer() {
  return (
    <div className="fixed bottom-2 left-0 ml-3 mb-5 footer">
      <div className="icon">
        <a href="https://github.com/Omribak">
          <AiFillGithub size={40} />
        </a>
      </div>
      <div className=" mb-5"></div>
      <div className="icon">
        <a href="https://linkedin.com/in/omri-bakal">
          <AiFillLinkedin size={40} />
        </a>
      </div>
    </div>
  );
}

export default Footer;

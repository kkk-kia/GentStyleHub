import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css"
export const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <a><FontAwesomeIcon icon={faFacebook} /></a>
        <a><FontAwesomeIcon icon={faInstagram} /></a>
        <a><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
      <div className="links">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Team</a>
        <a>Contact</a>
      </div>
    </div>
  );
};

import "./Footer.scss";
import copyright from "../../images/home/copyright.png";
import facebook from "../../images/home/facebook.png";
import instagram from "../../images/home/instagram.png";

const Footer = () => {
  return (
    <div className="foot-div">
      <div className="footer-part-1">
        <img className="footer-icon-cr" src={copyright} alt="copyright logo" />
        <span>Copyright</span>
      </div>
      <div className="footer-part-2">
        <span>Follow us</span>
        <a
          href="http://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-icon-fb" src={facebook} alt="facebook logo" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icon-ig"
            src={instagram}
            alt="instagram logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

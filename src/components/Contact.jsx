import twLogo from "./assets/images/tw-icon.png";
import igLogo from "./assets/images/ig-icon.png";
import fbLogo from "./assets/images/fb-icon.png";
import ghLogo from "./assets/images/gh-icon.png";

function Contact() {
  return (
    <div id="contact-div">
      <div id="icons-wrapper-contact-div">
        <a href="https://twitter.com">
          <img src={twLogo} alt="" />
        </a>
        <a href="https://facebook.com">
          <img src={fbLogo} alt="" />
        </a>
        <a href="https://instagram.com">
          <img src={igLogo} alt="" />
        </a>
        <a href="https://github.com">
          <img src={ghLogo} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;

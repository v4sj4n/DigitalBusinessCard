import logo from 'assets/logo.jpg';
import emailIcon from 'assets/email-icon.png';
import linkedinIcon from 'assets/linkedin-icon.png';

function Info() {
  return (
    <div className="info-div">
      <img src={logo} alt="" width="100%" />
      <h1 id="name-info-div">Vasjan Çupri</h1>
      <h2 id="profession-info-div">Programmer</h2>
      <a id="website-info-div" href="https://v4sj4n.netlify.app">
        v4sj4n.netlify.app
      </a>
      <div id="icons-info-div">
        <a href="mailto:vasjancupri04@gmail.com">

        <div id="email">
          <img src={emailIcon} alt="" />
          <p>e-Mail</p>
        </div>
        </a>
          <a href="https://www.linkedin.com/in/v4sj4n">
        <div id="linkedin">
            <img src={linkedinIcon} alt="" />
            <p>LinkedIn</p>
        </div>
          </a>
      </div>
    </div>
  );
}

export default Info;

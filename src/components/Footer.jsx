import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Shubham Bhogal</h3>

        <p>MERN Stack Developer</p>

        <p className="copyright">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
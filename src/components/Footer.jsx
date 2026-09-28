import './Footer.css'

function Footer() {
  const currentYear=new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <strong>Holiday Finder</strong>
          <span className="footer-bullet">•</span>
          <span>
            &copy; {currentYear} Holiday Finder Global Observance Platform. All rights
            reserved.
          </span>
        </div>
        
      </div>
      <div className="footer-subtext">
        Powered by Nager.Date
      </div>
    </footer>
  );
}

export default Footer;

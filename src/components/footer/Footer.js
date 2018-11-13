import React from 'react'

export default function Footer() {
return (
<div>
  <footer className="page-footer red darken-4">
    <div className="row center white-text">
      <div className="col s12">
        <h3>Shreya Sweets Mangalore</h3>
        <p>Shreya Sweets, Kudroli Temple Rd, Alake, Kodailbail, Mangaluru, Karnataka - 575003</p>
        <p>S L N Complex, GHS Rd, Hampankatta, Mangaluru, Karnataka - 575001</p>
        <h5>Follow Us On Social Media</h5>
        <div className="social-buttons">
          <a href="/" className="btn-floating btn-small red">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="btn-floating btn-small red">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>


    <div className="footer-copyright red darken-3">
      <div className="container">
        <div className="row">
          <div className="col s6">
            <p>&copy; 2018 Shreya Sweets. Site by <a className ="vibs-link" href="https://vibs.co.in/">VIBS,Mangalore.</a></p>
          </div>
          <div className="col s6">
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/">Products</a>
              <a href="/">Cart</a>
              <a href="/">Dashboard</a>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
)
}
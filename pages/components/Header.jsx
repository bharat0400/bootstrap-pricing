import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
  
        <a href="#" className="d-flex align-items-center text-dark text-decoration-none">
          <img src="https://getbootstrap.com/docs/5.0/assets/img/favicons/safari-pinned-tab.svg" className="me-2" width={32} height={40}/>
          <span className="fs-4">Pricing example</span>
        </a>
  
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
          <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>
        </nav>
      </div>
  
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center" style={{maxWidth: 700}}>
        <h1 className="display-4 fw-normal">Pricing</h1>
        <p className="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. Its built with default Bootstrap components and utilities with little customization.</p>
      </div>
    </header>
    );
}

export default Header;
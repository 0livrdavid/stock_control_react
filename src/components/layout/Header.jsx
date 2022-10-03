import React, { useEffect, useState, useContext } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import '../../extensoes/css/layout.css';
import '../../extensoes/css/style.css';
import '../../extensoes/css/react-bootstrap.css';

import img_logo from '../../extensoes/img/logo_control_estoque.png'

import Context from '../Context';

function Header() {
    const {link,setLink,sublink,setSublink} = useContext(Context);
    const [buttomClicked,setButtomClicked] = useState('');
    
    useEffect(() => {
      renderContext();
    })

    function renderContext (var_link = link, var_sublink = sublink) {
      setLink(var_link);
      setSublink(var_sublink);
      setButtomClicked(var_link);
    }

    const navDropdownTitle = <span><i className={`bi icon bi-plus-circle${buttomClicked === "link_add" ? "-fill" : ""}`} />Add</span>;

    return (
    <header>
      <ReactBootstrap.Navbar bg="light" expand="lg" className="navbar navbar-expand-lg navbar-light bg-light">
          <ReactBootstrap.Container>
            <ReactBootstrap.Navbar.Brand onClick={() => renderContext("link_home",null)} className="navbar-brand mb-0 h1">
              <img className="d-inline-block align-center" src={img_logo} alt="Home" width={50} height={50} />
              <span style={{verticalAlign: 'middle', fontSize: 'larger', fontWeight: 700, marginLeft: '6px'}}>Stock Control</span>
            </ReactBootstrap.Navbar.Brand>
            
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootstrap.Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
                
                <ReactBootstrap.Nav.Link className="nav-item active">
                  <button id="link_home" className={`button_link nav-link ${buttomClicked === "link_home" ? "button_link_clicked" : ""}`} onClick={() => renderContext("link_home",null)}><i className={`bi icon bi-house${buttomClicked === "link_home" ? "-fill" : ""}`} />Home</button>
                </ReactBootstrap.Nav.Link>
                
                <ReactBootstrap.Nav.Link className="nav-item active">
                  <button id="link_table" className={`button_link nav-link ${buttomClicked === "link_table" ? "button_link_clicked" : ""}`} onClick={() => renderContext("link_table",null)}><i className={`bi icon bi-file-bar-graph${buttomClicked === "link_table" ? "-fill" : ""}`} />List</button>
                </ReactBootstrap.Nav.Link>

                <ReactBootstrap.NavDropdown title={navDropdownTitle} id="basic-nav-dropdown" className={`button_link nav-link ${buttomClicked === "link_add" ? "button_link_clicked" : ""}`}>
                  <ReactBootstrap.NavDropdown.Item><button id="link_add_product" className="button_link nav-link dropdown-item" onClick={() => renderContext("link_add","product")}><i className="bi bi-box-seam icon" />Product</button></ReactBootstrap.NavDropdown.Item>
                  <ReactBootstrap.NavDropdown.Item><button id="link_add_user" className="button_link nav-link dropdown-item" onClick={() => renderContext("link_add","user")}><i className="bi bi-person icon" />User</button></ReactBootstrap.NavDropdown.Item>
                </ReactBootstrap.NavDropdown>

                <ReactBootstrap.Nav.Link className="nav-item active">
                  <button id="link_about" className={`button_link nav-link ${buttomClicked === "link_about" ? "button_link_clicked" : ""}`} onClick={() => renderContext("link_about",null)}><i className="bi bi-file-person icon" />About</button>
                </ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
      </header>
    );
}

export default Header
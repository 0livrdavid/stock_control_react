import React, { useEffect, useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import '../../extensoes/css/layout.css';
import '../../extensoes/css/style.css';

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

    return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a onClick={() => renderContext("link_home",null)} className="navbar-brand mb-0 h1">
              <img className="d-inline-block align-center" src={img_logo} alt="Home" width={50} height={50} />
              <span style={{verticalAlign: 'middle', fontSize: 'larger', fontWeight: 700, marginLeft: '6px'}}>Stock Control</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav" style={{flex: 'initial'}}>
              <ul className="navbar-nav">
                <li className="nav-item active icon_base_li">
                  <button id="link_home" className={`button_link nav-link ${buttomClicked === "link_home" ? "button_link_clicked" : ""}`} onClick={() => renderContext("link_home",null)}><i className={`bi icon bi-house${buttomClicked === "link_home" ? "-fill" : ""}`} />Home</button>
                </li>
                <li className="nav-item active icon_base_li">
                  <button id="link_table" className={`button_link nav-link ${buttomClicked === "link_table" ? "button_link_clicked" : ""}`} onClick={() => renderContext("link_table",null)}><i className={`bi icon bi-file-bar-graph${buttomClicked === "link_table" ? "-fill" : ""}`} />List</button>
                </li>
                <li className="nav-item dropdown icon_base_li">
                  <button id="link_add" className={`button_link nav-link ${buttomClicked === "link_add" ? "button_link_clicked" : ""}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className={`bi icon bi-plus-circle${buttomClicked === "link_add" ? "-fill" : ""}`} />Add
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="link_add">
                    <li><button id="link_add_product" className="button_link nav-link dropdown-item" onClick={() => renderContext("link_add","product")}><i className="bi bi-box-seam icon" />Product</button></li>
                    <li><button id="link_add_user" className="button_link nav-link dropdown-item" onClick={() => renderContext("link_add","user")}><i className="bi bi-person icon" />User</button></li>
                  </ul>

                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className={`button_link nav-link ${buttomClicked === "link_add" ? "button_link_clicked" : ""}`}>
                      <i className={`bi icon bi-plus-circle${buttomClicked === "link_add" ? "-fill" : ""}`} />Add
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item><button id="link_add_product" className="button_link nav-link dropdown-item" onClick={() => renderContext("link_add","product")}><i className="bi bi-box-seam icon" />Product</button></Dropdown.Item>
                      <Dropdown.Item><button id="link_add_user" className="button_link nav-link dropdown-item" onClick={() => renderContext("link_add","user")}><i className="bi bi-person icon" />User</button></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item active icon_base_li">
                  <button id="link_about" className={`button_link nav-link ${buttomClicked === "link_about" ? "button_link_clicked" : ""}`} onClick={() => renderContext("link_about",null)}><i className="bi bi-file-person icon" />About</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header
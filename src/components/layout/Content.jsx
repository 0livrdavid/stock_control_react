import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import '../../extensoes/css/layout.css';
import '../../extensoes/css/style.css';

import Grapich from '../link_menu/Grapich'
import Table from '../link_menu/Table';
import About from '../link_menu/About';
import AddProduct from '../link_menu/add/AddProduct';
import AddUser from '../link_menu/add/AddUser';

import { useContext } from 'react';
import Context from '../Context';

function Content() {
    const {link, sublink} = useContext(Context);
  
    sublink == null ? window.history.replaceState("","","?link="+link): window.history.replaceState("","","?link="+link+"&sublink="+sublink);
    
    return (
      <ReactBootstrap.Container className='content'>
        {link === "link_home" && <Grapich/>}
        {link === "link_table" && <Table/>} 
        {sublink === "product" && <AddProduct/>} 
        {sublink === "user" && <AddUser/>} 
        {link === "link_about" && <About/>} 
      </ReactBootstrap.Container>
    );
}

export default Content
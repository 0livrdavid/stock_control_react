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
    const {link,sublink} = useContext(Context);
    var content;
  
    switch (link) {
        case "link_home":
            content = <Grapich/>;
            break;
        case "link_table":
            content = <Table/>;
            break;
        case "link_add":
            switch (sublink) {
                case "product":
                    content = <AddProduct/>;
                    break;
                case "user":
                    content = <AddUser/>;
                    break;
                default:
                    break;
            }
            break;
        case "link_about":
            content = <About/>;
            break;
        default:
            break;
    }
    if (sublink == null) {
        window.history.replaceState("","","?link="+link);
    } else {
        window.history.replaceState("","","?link="+link+"&sublink="+sublink);
    }
    
    return (
      <ReactBootstrap.Container>
        {content}
      </ReactBootstrap.Container>
    );
}

export default Content
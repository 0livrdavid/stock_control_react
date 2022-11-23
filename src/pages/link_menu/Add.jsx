import * as ReactBootstrap from 'react-bootstrap';

import AddProduct from '../../components/component_add/AddProduct';
import AddUser from '../../components/component_add/AddUser';

import { useContext } from 'react';
import Context from '../Context';

export default function Add() {
    const {link, sublink} = useContext(Context);
  
    sublink == null ? window.history.replaceState("","","?link="+link): window.history.replaceState("","","?link="+link+"&sublink="+sublink);

      return (
        <ReactBootstrap.Container>
            {sublink === "product" && <AddProduct/>} 
            {sublink === "user" && <AddUser/>} 
        </ReactBootstrap.Container>
      );
}
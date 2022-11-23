import { useContext, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import Context from '../../../pages/Context';


export default function PedidoSearch () {
    const { searchForm, setSearchForm } = useContext(Context);

    useEffect(() => {
        console.log(typeof searchForm);
        console.log("primeiro: "+searchForm);

        setSearchForm(
            {
                product:   "",
                category: "",
                manufacturing: ""
            }
        )
    }, []);
    console.log(typeof searchForm);
    console.log(searchForm);

    return (
        <ReactBootstrap.Form>
            <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                    <ReactBootstrap.Form.Label>Pedidos</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control name="Product" type="text" placeholder="Product" onChange={(e) => setSearchForm(
                        prevState => {
                        let link_selected = Object.assign({}, prevState.searchForm);
                        link_selected.name = e.target.name;
                        link_selected.value = e.target.value;           
                        return { link_selected }
                    })}/>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col>
                    <ReactBootstrap.Form.Label>Category</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Select onChange={(e) => setSearchForm(
                        prevState => {
                        let link_selected = Object.assign({}, prevState.searchForm);
                        link_selected.name = e.target.name;
                        link_selected.value = e.target.value;           
                        return { link_selected }
                    })}>
                        <option>Fish</option>
                        <option>Meal</option>
                        <option>Fruit</option>
                        <option>Vegetables</option>
                        <option>Pasta</option>
                    </ReactBootstrap.Form.Select>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col>
                    <ReactBootstrap.Form.Label>Manufacturing</ReactBootstrap.Form.Label>
                    <ReactBootstrap.Form.Control type="date" placeholder="Manufacturing" />
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
        </ReactBootstrap.Form>
    );
}
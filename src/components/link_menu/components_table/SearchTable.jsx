import { useState, useContext } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import Context from '../../Context';

function SearchTable () {
    const { linkSelected, setLinkSelected, linkPessoas, setlinkPessoas } = useContext(Context);

    return (
        <>
            <ReactBootstrap.Container className='content'>
                <ReactBootstrap.Form>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col>
                            <ReactBootstrap.Form.Label>ID</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control type="id" placeholder="ID"/>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col>
                            <ReactBootstrap.Form.Label>Product</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Control type="product" placeholder="Product" />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col>
                            <ReactBootstrap.Form.Label>Category</ReactBootstrap.Form.Label>
                            <ReactBootstrap.Form.Select>
                                <option>Fish</option>
                                <option>Meal</option>
                                <option>Fruit</option>
                                <option>Vegetables</option>
                                <option>Pasta</option>
                            </ReactBootstrap.Form.Select>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Form>
            </ReactBootstrap.Container>
        </>
    );
}

export default SearchTable
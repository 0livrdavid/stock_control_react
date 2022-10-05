import { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import DataTable from 'react-data-table-component';

import NavTable from './components_table/NavTable';
import SearchTable from './components_table/SearchTable';

import Context from '../Context';

import JSON from './components_table/test'

function Table() {
    const [linkSelected, setLinkSelected] = useState("Produtos");
    const [linkPessoas, setlinkPessoas] = useState('Pessoas');

    var data = JSON;

    switch (linkSelected) {
        case "Produtos":
            data = data.Produtos;
            break;
        case "Pedidos":
            data = data.Pedidos;
            break;
        case "Locais":
            data = data.Locais;
            break;
        case "Depositos":
            data = data.Depositos;
            break;
        case "Clientes":
            data = data.Clientes;
            break;
        case "Fornecedores":
            data = data.Fornecedores;
            break;  
        case "Almoxarife":
            data = data.Almoxarife;
            break;
        case "Motorista":
            data = data.Motorista;
            break;
        case "Repositor":
            data = data.Repositor;
            break;    
        default:
            break;
    }

    const [columns, setColumns] = useState([]);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setColumns([
				{
					name: 'Title',
					selector: row => row.title,
					sortable: true,
				},
				{
					name: 'Year',
					selector: row => row.year,
					sortable: true,
				},
			]);

			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);
  
    return (
        <Context.Provider value={{ linkSelected, setLinkSelected, linkPessoas, setlinkPessoas }}>
            <ReactBootstrap.Container>
                <NavTable />
                <SearchTable />
                <DataTable title={linkSelected} columns={columns} data={data} progressPending={pending} pagination />



                <br></br>
                <br></br>
                <br></br>


                <div className="tab-content" id="myTabContent">
                    <div id="table_produtos" className="tab-pane fade show active" role="tabpanel" aria-labelledby="link_table_produtos">
                        
                        <div className="row mt-4 overflow-auto">
                            <div className="col-12">
                                <table id="example" className="display table table-striped " style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th id="options" />
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Quantity</th>
                                            <th>Price(Unity)</th>
                                            <th>Provide</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="#editModal" role="button" data-bs-target="#editModal" data-bs-toggle="modal" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="table_pedidos" className="tab-pane fade" role="tabpanel" aria-labelledby="link_table_pedidos">
                        teste 2
                        <form>
                            <div className="row mt-2">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="id">Id</label>
                                        <input style={{ marginTop: '2%' }} type="number" min={0} className="form-control" id="id" placeholder="Find by Id..." />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="products">Products</label>
                                        <input style={{ marginTop: '2%' }} type="products" className="form-control" id="products" placeholder="Find Products..." />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="formControlSelect">Category</label>
                                        <select style={{ marginTop: '2%' }} className="form-control" id="formControlSelect">
                                            <option>Fish</option>
                                            <option>Meal</option>
                                            <option>Fruit</option>
                                            <option>Vegetables</option>
                                            <option>Pasta</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row mt-4 overflow-auto">
                            <div className="col-12">
                                <table id="example" className="display table table-striped " style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th id="options" />
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Quantity</th>
                                            <th>Price(Unity)</th>
                                            <th>Provide</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="#editModal" role="button" data-bs-target="#editModal" data-bs-toggle="modal" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="table_deposito" className="tab-pane fade" role="tabpanel" aria-labelledby="link_table_local">
                        teste 3
                        <form>
                            <div className="row mt-2">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="id">Id</label>
                                        <input style={{ marginTop: '2%' }} type="number" min={0} className="form-control" id="id" placeholder="Find by Id..." />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="products">Products</label>
                                        <input style={{ marginTop: '2%' }} type="products" className="form-control" id="products" placeholder="Find Products..." />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="formControlSelect">Category</label>
                                        <select style={{ marginTop: '2%' }} className="form-control" id="formControlSelect">
                                            <option>Fish</option>
                                            <option>Meal</option>
                                            <option>Fruit</option>
                                            <option>Vegetables</option>
                                            <option>Pasta</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row mt-4 overflow-auto">
                            <div className="col-12">
                                <table id="example" className="display table table-striped " style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th id="options" />
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Quantity</th>
                                            <th>Price(Unity)</th>
                                            <th>Provide</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="#editModal" role="button" data-bs-target="#editModal" data-bs-toggle="modal" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="table_local" className="tab-pane fade" role="tabpanel" aria-labelledby="link_table_local">
                        teste 4
                        <form>
                            <div className="row mt-2">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="id">Id</label>
                                        <input style={{ marginTop: '2%' }} type="number" min={0} className="form-control" id="id" placeholder="Find by Id..." />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="products">Products</label>
                                        <input style={{ marginTop: '2%' }} type="products" className="form-control" id="products" placeholder="Find Products..." />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="formControlSelect">Category</label>
                                        <select style={{ marginTop: '2%' }} className="form-control" id="formControlSelect">
                                            <option>Fish</option>
                                            <option>Meal</option>
                                            <option>Fruit</option>
                                            <option>Vegetables</option>
                                            <option>Pasta</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row mt-4 overflow-auto">
                            <div className="col-12">
                                <table id="example" className="display table table-striped " style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th id="options" />
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Quantity</th>
                                            <th>Price(Unity)</th>
                                            <th>Provide</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="#editModal" role="button" data-bs-target="#editModal" data-bs-toggle="modal" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="table_pessoas" className="tab-pane fade" role="tabpanel" aria-labelledby="link_table_pessoas">
                        teste 5
                        <form>
                            <div className="row mt-2">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="id">Id</label>
                                        <input style={{ marginTop: '2%' }} type="number" min={0} className="form-control" id="id" placeholder="Find by Id..." />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="products">Products</label>
                                        <input style={{ marginTop: '2%' }} type="products" className="form-control" id="products" placeholder="Find Products..." />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <label htmlFor="formControlSelect">Category</label>
                                        <select style={{ marginTop: '2%' }} className="form-control" id="formControlSelect">
                                            <option>Fish</option>
                                            <option>Meal</option>
                                            <option>Fruit</option>
                                            <option>Vegetables</option>
                                            <option>Pasta</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row mt-4 overflow-auto">
                            <div className="col-12">
                                <table id="example" className="display table table-striped " style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th id="options" />
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Quantity</th>
                                            <th>Price(Unity)</th>
                                            <th>Provide</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="#editModal" role="button" data-bs-target="#editModal" data-bs-toggle="modal" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a className="btn btn-default bi bi-pencil-square" href="app/link_menu/edit.html" role="button" />
                                                <a className="btn btn-default bi bi-dash-circle" href="#removeModal" role="button" data-bs-target="#removeModal" data-bs-toggle="modal" />
                                            </td>
                                            <td>1</td>
                                            <td>Ham</td>
                                            <td>Meal</td>
                                            <td>61</td>
                                            <td>$ 10</td>
                                            <td>Friboi</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactBootstrap.Container>
        </Context.Provider>
    );
}

export default Table
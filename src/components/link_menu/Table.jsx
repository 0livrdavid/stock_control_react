import * as ReactBootstrap from 'react-bootstrap';

function Table() {
      return (
        <ReactBootstrap.Container>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a id="link_table_produtos" className="nav-link active" aria-current="page" href="#table_produtos" data-bs-target="#table_produtos" role="tab" aria-controls="home" aria-selected="true">Produtos</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a id="link_table_pedidos" className="nav-link" href="#table_pedidos" data-bs-target="#table_produtos" role="tab" aria-controls="home" aria-selected="true">Pedidos</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a id="link_table_deposito" className="nav-link" href="#table_deposito" data-bs-target="#table_produtos" role="tab" aria-controls="home" aria-selected="true">Deposito</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a id="link_table_local" className="nav-link" href="#table_local" data-bs-target="#table_produtos" role="tab" aria-controls="home" aria-selected="true">Local</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a id="link_table_pessoas" className="nav-link" href="#table_pessoas" data-bs-target="#table_pessoas" role="tab" aria-controls="home" aria-selected="true">Pessoas</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div id="table_produtos" className="tab-pane fade show active" role="tabpanel" aria-labelledby="link_table_produtos">
                    teste 1
                    <form>
                    <div className="row mt-2">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="form-group" style={{textAlign: 'center'}}>
                            <label htmlFor="id">Id</label>
                            <input style={{marginTop: '2%'}} type="number" min={0} className="form-control" id="id" placeholder="Find by Id..." />
                        </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="form-group" style={{textAlign: 'center'}}>
                            <label htmlFor="products">Products</label>
                            <input style={{marginTop: '2%'}} type="products" className="form-control" id="products" placeholder="Find Products..." />
                        </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="form-group" style={{textAlign: 'center'}}>
                            <label htmlFor="formControlSelect">Category</label>
                            <select style={{marginTop: '2%'}} className="form-control" id="formControlSelect">
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
                        <table id="example" className="display table table-striped " style={{width: '100%'}}>
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
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="id">Id</label>
                        <input style={{marginTop: '2%'}} type="number" min={0} className="form-control" id="id" placeholder="Find by Id..." />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="products">Products</label>
                        <input style={{marginTop: '2%'}} type="products" className="form-control" id="products" placeholder="Find Products..." />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="formControlSelect">Category</label>
                        <select style={{marginTop: '2%'}} className="form-control" id="formControlSelect">
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
                    <table id="example" className="display table table-striped " style={{width: '100%'}}>
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
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="id">Id</label>
                        <input style={{marginTop: '2%'}} type="number" min={0} className="form-control" id="id" placeholder="Find by Id..." />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="products">Products</label>
                        <input style={{marginTop: '2%'}} type="products" className="form-control" id="products" placeholder="Find Products..." />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="formControlSelect">Category</label>
                        <select style={{marginTop: '2%'}} className="form-control" id="formControlSelect">
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
                    <table id="example" className="display table table-striped " style={{width: '100%'}}>
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
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="id">Id</label>
                        <input style={{marginTop: '2%'}} type="number" min={0} className="form-control" id="id" placeholder="Find by Id..." />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="products">Products</label>
                        <input style={{marginTop: '2%'}} type="products" className="form-control" id="products" placeholder="Find Products..." />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="formControlSelect">Category</label>
                        <select style={{marginTop: '2%'}} className="form-control" id="formControlSelect">
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
                    <table id="example" className="display table table-striped " style={{width: '100%'}}>
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
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="id">Id</label>
                        <input style={{marginTop: '2%'}} type="number" min={0} className="form-control" id="id" placeholder="Find by Id..." />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="products">Products</label>
                        <input style={{marginTop: '2%'}} type="products" className="form-control" id="products" placeholder="Find Products..." />
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="form-group" style={{textAlign: 'center'}}>
                        <label htmlFor="formControlSelect">Category</label>
                        <select style={{marginTop: '2%'}} className="form-control" id="formControlSelect">
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
                    <table id="example" className="display table table-striped " style={{width: '100%'}}>
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
      );
}

export default Table
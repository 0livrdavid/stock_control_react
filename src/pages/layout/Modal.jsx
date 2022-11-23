import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import '../../extensoes/css/layout.css';
import '../../extensoes/css/style.css';

function Modal() {
    return (
      <>
        <div className="modal fade" id="removeModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Remove Product</h5>
                    </div>
                    <div className="modal-body">
                        <div className="form-group" style={{textAlign: 'left'}}>
                        <span><h5>Name:</h5>Meal</span>
                        <span><h5 style={{marginTop: '5%'}}>Quantity:</h5><input style={{marginTop: '2%'}} type="number" min={0} max={61} className="form-control" id="products" placeholder="Quantity of Products..." /></span>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</a>
                        <a type="button" className="btn btn-outline-danger">Remove</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Item</h5>
                    </div>
                    <div className="modal-body">
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label htmlFor="name"><h6>Name</h6></label>
                            <input className="form-control" id="edit_name" placeholder="Ham" />
                        </div>
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label style={{marginTop: '4%'}} htmlFor="name"><h6>Category</h6></label>
                            <input className="form-control" id="edit_category" placeholder="Meal" />
                        </div>
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label style={{marginTop: '4%'}} htmlFor="name"><h6>Quantity</h6></label>
                            <input className="form-control" id="edit_quantity" placeholder={61} disabled="true" />
                        </div>
                        <div className="form-group" style={{textAlign: 'left'}}>
                            <label style={{marginTop: '4%'}} htmlFor="name"><h6>Price (Unity)</h6></label>
                            <input className="form-control" id="edit_price" placeholder={10} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</a>
                        <a type="button" className="btn btn-outline-success">Save changes</a>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Modal
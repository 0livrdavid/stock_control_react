import * as ReactBootstrap from 'react-bootstrap';

function AddProduct () {
    return (
      <>
        <ReactBootstrap.Container>
          <form>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group" style={{textAlign: 'center'}}>
                  <label htmlFor="id">Id</label>
                  <input style={{marginTop: '2%'}} type="id" className="form-control" id="id" placeholder="Id Product..." disabled />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group" style={{textAlign: 'center'}}>
                  <label htmlFor="name">Name</label>
                  <input style={{marginTop: '2%'}} type="name" className="form-control" id="name" placeholder="Name Products..." />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group" style={{textAlign: 'center'}}>
                  <label htmlFor="formControlSelect">Category</label>
                  <select style={{marginTop: '2%'}} className="form-control form-select" id="formControlSelect">
                    <option>Fish</option>
                    <option>Meal</option>
                    <option>Fruit</option>
                    <option>Vegetables</option>
                    <option>Pasta</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group" style={{textAlign: 'center'}}>
                  <label htmlFor="quantity">Quantity</label>
                  <input style={{marginTop: '2%'}} type="quantity" className="form-control" id="quantity" placeholder="Quantity of products..." />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group" style={{textAlign: 'center'}}>
                  <label htmlFor="price">Price</label>
                  <input style={{marginTop: '2%'}} type="price" className="form-control" id="price" placeholder="Price Products..." />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group" style={{textAlign: 'center'}}>
                  <label htmlFor="provider">Provider</label>
                  <input style={{marginTop: '2%'}} type="provider" className="form-control" id="provider" placeholder="Provider..." />
                </div>
              </div>
            </div>
          </form>
        </ReactBootstrap.Container>
        <ReactBootstrap.Container>
          <div className="row justify-content-end mt-5">
            <div className="col-md-4 offset-md-3" style={{textAlign: 'right'}}>
              <a href="index.html" type="button" className="btn btn-outline-success" data-dismiss="modal">Save Changes</a>
              <a href="index.html" type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</a>
            </div>
          </div>
        </ReactBootstrap.Container>
      </>
    );
}

export default AddProduct
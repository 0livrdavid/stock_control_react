function AddUser () {
    return (
        <div>
        <div className="container">
          <form>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group" style={{textAlign: 'center'}}>
                  <label htmlFor="id">Id</label>
                  <input style={{marginTop: '2%'}} type="id" className="form-control" id="id" placeholder="Id User..." disabled />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group" style={{textAlign: 'center'}}>
                  <label htmlFor="name">Name</label>
                  <input style={{marginTop: '2%'}} type="name" className="form-control" id="name" placeholder="Name User..." />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group" style={{textAlign: 'center'}}>
                  <label htmlFor="formControlSelect">Type</label>
                  <select style={{marginTop: '2%'}} className="form-control form-select" id="formControlSelect">
                    <optgroup label="Pessoa Fisíca">
                      <option>Almoxarife</option>
                      <option>Motorista</option>
                      <option>Cliente</option>
                      <option>Repositor</option>
                    </optgroup><optgroup label="Pessoa Jurídica">
                      <option>Cliente</option>
                      <option>Fornecedor</option>
                    </optgroup></select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container">
          <div className="row justify-content-end mt-5">
            <div className="col-md-4 offset-md-3" style={{textAlign: 'right'}}>
              <a href="index.html" type="button" className="btn btn-outline-success" data-dismiss="modal">Save Changes</a>
              <a href="index.html" type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AddUser


const ModalDialog = () => {
    
    return(
        <>
            {/*// <!-- Button trigger modal -->*/}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Launch static backdrop modal
            </button>
            
            {/*// <!-- Modal -->*/}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 // tabindex={"-1"}
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="mmodal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                                <div className="input-group">
                                    <span className="input-group-text"
                                          id="basic-addon3">https://example.com/users/</span>
                                    <input type="text" className="form-control" id="basic-url"
                                           aria-describedby="basic-addon3 basic-addon4"/>
                                </div>
                                <div className="form-text" id="basic-addon4">Example help text goes outside the input
                                    group.
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
}
export default ModalDialog;
<div class="container-parent container mt-5" data-page="<?= $page?>">
    <div class="div-exp-forms">
        <div class="bg-dark p-5 my-3 rounded"> 
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Professional Title</label>
                    <input type="text" class="form-control" id="inputCompanyTitle">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Company Name</label>
                    <input type="text" class="form-control" id="inputCompanyName">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Years</label>
                    <input type="text" class="form-control" id="inputCompanyYears">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description</label>
                    <textarea class="form-control" id="inputCompanyDesc" rows="3"></textarea>
                </div>
                <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-submit-exp">Submit</button>
                </div>
            </form>
            <div class="div-logs">
            
            </div>
        </div>
    </div>
</div>
<div class="modal fade text-dark" id="editModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Edit</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Professional Title</label>
                    <input type="text" class="form-control" id="editCompanyTitle">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Company Name</label>
                    <input type="text" class="form-control" id="editCompanyName">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Years</label>
                    <input type="text" class="form-control" id="editCompanyYears">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description</label>
                    <textarea class="form-control" id="editCompanyDesc" rows="3"></textarea>
                </div>
                <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-edit-submit-exp">Submit</button>
                </div>
            </form>
      </div>
    </div>
  </div>
</div>
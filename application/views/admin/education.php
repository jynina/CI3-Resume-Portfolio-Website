<div class="container-parent container mt-5" data-page="<?= $page?>">
    <div class="div-education-forms">
        <div class="bg-dark p-5 my-3 rounded"> 
            <form class="mb-3 form-educ">
                <div class="mb-3">
                    <label for="name" class="form-label">Institution</label>
                    <input type="text" class="form-control" id="inputInstitution" required>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Course/Education Level</label>
                    <input type="text" class="form-control" id="inputLevel" required>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Academic Year</label>
                    <input type="text" class="form-control" id="inputAcadYear" required>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description <span class="text-secondary">(Optional)</span></label>
                    <textarea class="form-control" id="inputEducDescription" rows="3" value=""></textarea>
                </div>
                <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-submit-educ">Submit</button>
                </div>
            </form>
        </div>
    </div>
    <div class="div-logs container">
        <div class="log-row border border-white rounded my-3" data-id= ${row.id} data-isactive=${row.is_active}>
            <div class="row my-3">
                <div class="col-6 mx-3">
                    <p>${row.institution_name}</p>
                </div>
                <div class="col-3">
                    <p>${row.education_level}</p>
                </div>
                <div class="col-2">
                    <p>${row.acad_year}</p>
                </div>
                <div class="col-11 mx-3" style="text-align: justify;">
                    <p>
                    ${row.institution_desc}
                    </p>
                </div>
            <div class="col-11 mx-3 log-buttons" style="text-align: end;">
                <button type="button" class='btn btn-secondary btn-edit' data-id= ${row.id} data-bs-toggle="modal" data-bs-target="#editModal">
                    Edit
                    </button>
                    <button type="button" class='btn btn-danger btn-delete' data-id= ${row.id}>
                    Delete
                    </button>
                    <button type="button" class='btn btn-success btn-activate' data-id= ${row.id}>
                    Activate
                    </button>
                </div>
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
      <form class="mb-3 form-educ">
                <div class="mb-3">
                    <label for="name" class="form-label">Institution</label>
                    <input type="text" class="form-control" id="editInstitution" required>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Course/Education Level</label>
                    <input type="text" class="form-control" id="editLevel" required>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Academic Year</label>
                    <input type="text" class="form-control" id="editAcadYear" required>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description <span class="text-secondary">(Optional)</span></label>
                    <textarea class="form-control" id="editEducDescription" rows="3" value=""></textarea>
                </div>
                <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-submit-educ">Submit</button>
                </div>
            </form>
      </div>
    </div>
  </div>
</div>
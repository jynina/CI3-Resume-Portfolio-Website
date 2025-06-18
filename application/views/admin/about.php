<div class="container-parent container mt-5" data-page="<?= $page?>">
    <div class="p-5 my-3" id="forms-container">
        <div class="row container d-flex">
            <div class="col-xl-9 col-lg-8 col-md-7 mb-3">
              <input type="text" id="hiddenprofileid">
              <label for="name" class="form-label d-block">Name</label>
              <input type="text" class="form-control" id="inputName" placeholder="Kwenn" disabled>
              <label for="prof-name" class="form-label mt-lg-3">Professional Title</label>
              <input type="text" class="form-control" id="inputTitle" placeholder="Taong Bahay" disabled>
              <label for="exampleFormControlTextarea1" class="form-label mt-lg-3">Brief Description</label>
              <textarea class="form-control" id="inputDesc" rows="3" ></textarea>
            </div>
            <div class="col-xl-2 col-lg-3  col-md-3 ms-lg-5 me-lg-1 pt-lg-5">
                <label for="name" class="form-label d-block">Profile Picture</label>
                <form action="<?= base_url()?>upload_image" id="myDropzoneProfile" class="dropzone col" style="min-width: 200px; max-height: 200px;"></form>
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-secondary d-block d-md-block d-lg-block mt-5 me-2 btn-edit" data-bs-toggle="modal" data-bs-target="#editModal" id="btn-edit">Edit</button>
                    <button type="button" class="btn btn-primary btn-submit-about d-block d-md-block d-lg-block mt-5" id="btn-submit-about">Submit</button>
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
        <div class="row container d-flex">
            <div class="">
              
              <label for="name" class="form-label d-block">Name</label>
              <input type="text" class="form-control" id="editName" placeholder="Kwenn">
              <label for="prof-name" class="form-label mt-lg-3">Professional Title</label>
              <input type="text" class="form-control" id="editTitle" placeholder="Taong Bahay">
              <label for="exampleFormControlTextarea1" class="form-label mt-lg-3">Introduction</label>
              <textarea class="form-control" id="editDesc" rows="3"></textarea>
            </div>
            <div class="">
                <label for="name" class="form-label d-block">Profile Picture</label>
                <form action="<?= base_url()?>upload_image" id="editDropzoneProfile" class="dropzone col" style="min-width: 200px; max-height: 200px;"></form>
                <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-primary btn-submit-about d-block d-md-block d-lg-block mt-5" id="btn-edit-submit-about">Submit</button>
                </div>
            </div>  
        </div>
      </div>
    </div>
  </div>
</div>
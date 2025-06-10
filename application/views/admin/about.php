<div class="container-parent container mt-5" data-page="<?= $page?>">
    <div class="bg-dark p-5 my-3 rounded">
        <div class="row container d-flex">
            <div class="col-xl-9 col-lg-8 col-md-7 mb-3">
                <label for="name" class="form-label d-block">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Kwenn">
                <label for="prof-name" class="form-label mt-lg-3">Professional Title</label>
                <input type="text" class="form-control" id="inputTitle" placeholder="Taong Bahay">
                <label for="exampleFormControlTextarea1" class="form-label mt-lg-3">Brief Description</label>
                <textarea class="form-control" id="inputDesc" rows="3"></textarea>
            </div>
            <div class="col-xl-2 col-lg-3  col-md-3 ms-lg-5 me-lg-1 pt-lg-5">
                <label for="name" class="form-label d-block">Profile Picture</label>
                <form action="<?= base_url()?>upload_image" id="myDropzoneProfile" class="dropzone col" style="min-width: 170px; max-height: 170px;"></form>
                <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-primary btn-submit-about d-block d-md-block d-lg-block mt-5" id="btn-submit-about">Submit</button>
                </div>
            </div>  
        </div>
        
    </div>
</div>
<div class="container-parent container w-auto mt-5" data-page="<?= $page?>">
    <div>
        <div class="row container d-flex my-lg-3 p-1">
            <div class="col-xl-9 mb-3">
                <label for="name" class="form-label d-block">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Kwenn">
                <label for="prof-name" class="form-label mt-lg-3">Professional Title</label>
                <input type="text" class="form-control" id="inputTitle" placeholder="Taong Bahay">
                <label for="exampleFormControlTextarea1" class="form-label mt-lg-3">Brief Description</label>
                <textarea class="form-control" id="inputDesc" rows="3"></textarea>
            </div>
            <div class="col ps-lg-5 me-lg-1 pt-lg-5 justify-content-end" >
                <form action="<?= base_url()?>upload_image" id="myDropzoneProfile" class="dropzone col"></form>
                <button type="button" class="btn btn-primary btn-submit-about d-block d-md-block d-lg-block ms-3 mt-3" id="btn-submit-about">Submit</button>
            </div>  
        </div>
        
    </div>
</div>
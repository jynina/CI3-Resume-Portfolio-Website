<div class="container w-50 mt-5">
    <div>
        <div class="row container d-flex my-3 p-1">
            <div class="col-9 mb-3">
                <label for="name" class="form-label d-block">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Kwenn">
                <label for="prof-name" class="form-label mt-3">Professional Title</label>
                <input type="text" class="form-control" id="inputTitle" placeholder="Taong Bahay">
                <label for="exampleFormControlTextarea1" class="form-label mt-3">Brief Description</label>
                <textarea class="form-control" id="inputDesc" rows="3"></textarea>
            </div>
            <div class="col ps-5 me-1 pt-5 justify-content-end" >
                <form action="<?= base_url()?>index.php/upload_image" id="myDropzoneProfile" class="dropzone col"></form>
                <button class="btn btn-primary mt-4 btn-image-upload" id="btn-submit-img-profile">Upload Profile Picture</button>
            </div>  
        </div>
        <div class="">
            <button type="button" class="btn btn-primary btn-submit-about">Submit</button>
        </div>
        
    </div>
</div>
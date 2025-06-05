<div class="container w-50 mt-5">
    <div>
        <form action="<?= base_url()?>index.php/upload_image" id="myDropzone" class="dropzone"></form>
        <button id="btn-submit-profile">Upload Profile Picture</button>

        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder="Kwenn">
            </div>
            <div class="mb-3">
                <label for="prof-name" class="form-label">Professional Title</label>
                <input type="text" class="form-control" id="inputTitle" placeholder="Taong Bahay">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Brief Description</label>
                <textarea class="form-control" id="inputDesc" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-primary btn-submit-about">Submit</button>
        </form>
        
    </div>
</div>
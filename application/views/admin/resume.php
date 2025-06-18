<div class="container-parent container mt-5" data-page="<?= $page?>">
    <div class="p-5 my-3" id="forms-container">
        <div class="row container d-flex">
            <div class=" mb-3">
                <label for="name" class="form-label d-block">Resume Name</label>
                <input type="text" class="form-control" id="inputResumeName" placeholder="Resume 1">
                <label for="exampleFormControlTextarea1" class="form-label mt-lg-3">Brief Description</label>
                <textarea class="form-control" id="inputDesc" rows="3" ></textarea>
                <label for="exampleFormControlTextarea1" class="form-label mt-lg-3">File</label>
                <form action="<?= base_url()?>upload_image" id="myDropzoneResume" class="dropzone col" style="min-width: 200px; max-height: 200px;"></form>
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-primary btn-submit-resume d-block d-md-block d-lg-block mt-5" id="btn-submit-resume">Submit</button>
                </div>
            </div>
        </div>
        <div class="div-logs">
        </div>
    </div>
</div>
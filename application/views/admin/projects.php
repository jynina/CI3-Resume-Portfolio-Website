<div class="container w-50 mt-5">
    <div class="div-education-forms">
        <div class="bg-dark p-5 my-3 rounded"> 
            <form class="mb-3 form-project">
                <div class="mb-3">
                    <label for="name" class="form-label">Project Name</label>
                    <input type="text" class="form-control" id="inputProjectName">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Role</label>
                    <input type="text" class="form-control" id="inputRole">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Technologies</label>
                    <input type="text" class="form-control" id="inputTechnologies">
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description <span class="text-secondary">(Optional)</span></label>
                    <textarea class="form-control" id="inputProjectDescription" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-submit-projects">Submit</button>
            </form>
                <form action="<?= base_url()?>index.php/upload_image" id="myDropzoneMultiple" class="dropzone"></form>
                <button class="btn btn-primary mt-4" id="btn-submit-profile">Upload Profile Picture</button>
        </div>
    </div>
</div>
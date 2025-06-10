<div class="container-parent container mt-5" data-page="<?= $page?>">
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
            </form>
                <label for="exampleFormControlTextarea1" class="form-label">Project Screenshots</label>
                <form action="<?= base_url()?>upload_image" id="myDropzoneMultiple" class="dropzone"></form>
                <div class="div-logs">
            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-submit-projects" id="btn-submit-projects">Submit</button>
            </div>
            </div>
        </div>
    </div>
</div>
<div class="container w-50 mt-5">
    <button type="button" class="btn btn-danger mb-3 btn-add-education">Add another</button>
    <div class="div-education-forms">
        <div class="bg-dark p-5 my-3 rounded"> 
            <form class="mb-3 form-educ">
                <div class="mb-3">
                    <label for="name" class="form-label">Institution</label>
                    <input type="text" class="form-control" id="inputInstitution">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Course/Education Level</label>
                    <input type="text" class="form-control" id="inputLevel">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Academic Year</label>
                    <input type="text" class="form-control" id="inputAcadYear">
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description <span class="text-secondary">(Optional)</span></label>
                    <textarea class="form-control" id="inputEducDescription" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-submit-educ">Submit</button>
            </form>
                <form action="<?= base_url()?>index.php/upload_image" id="myDropzoneMultiple" class="dropzone"></form>
                <button class="btn btn-primary mt-4" id="btn-submit-profile">Upload Profile Picture</button>
        </div>
    </div>
</div>
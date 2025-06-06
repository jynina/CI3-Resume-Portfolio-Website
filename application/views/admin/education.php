<div class="container w-50 mt-5">
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
                <button class="btn btn-primary mt-4 btn-image-upload" id="btn-submit-img-educ">Upload Pictures</button>
        </div>
    </div>
    <div class="logs-educ container">
        <!-- <div class="log-row border border-white rounded my-3">
            <div class="row my-3">
                <div class="col-6 mx-3">
                    <p>Ebenezer Christian Academy</p>
                </div>
                <div class="col-3">
                    <p>Highschool</p>
                </div>
                <div class="col-2">
                    <p>2015-2020</p>
                </div>
                <div class="col-11 mx-3" style="text-align: justify;">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div class="col-11 mx-3">
                    award images
                </div>
            </div>
        </div>
        <div class="log-row border border-white rounded my-3">
            <div class="row my-3">
                <div class="col-6 mx-3">
                    <p>Ebenezer Christian Academy</p>
                </div>
                <div class="col-3">
                    <p>Highschool</p>
                </div>
                <div class="col-2">
                    <p>2015-2020</p>
                </div>
                <div class="col-11 mx-3" style="text-align: justify;">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div class="col-11 mx-3">
                    award images
                </div>
            </div>
        </div>   -->
    </div>
</div>
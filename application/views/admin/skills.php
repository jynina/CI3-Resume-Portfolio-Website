<div class="container-parent container mt-5" data-page="<?= $page?>">
    <div class="div-skills-forms">
        <div class="bg-dark p-5 my-3 rounded"> 
            <form>
                <div class="row">
                <div class="mb-3 col">
                    <label for="name" class="form-label">Skill</label>
                    <input type="text" class="form-control" id="inputSkillName" required>
                </div>
                <div class="mb-3 col"> 
                    <label for="name" class="form-label">Progress </label>
                    <input type="number" class="form-control" id="inputSkillProgress" min='0' max='100' required>
                </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description</label>
                    <textarea class="form-control" id="inputSkillDescription" rows="3"></textarea>
                </div>
                <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn btn-submit-skills">Submit</button>
                </div>
            </form>
            <div class="div-logs">
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
      <form>
                <div class="row">
                <div class="mb-3 col">
                    <label for="name" class="form-label">Skill</label>
                    <input type="text" class="form-control" id="editSkillName" required>
                </div>
                <div class="mb-3 col"> 
                    <label for="name" class="form-label">Progress </label>
                    <input type="number" class="form-control" id="editSkillProgress" min='0' max='100' required>
                </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description</label>
                    <textarea class="form-control" id="editSkillDescription" rows="3"></textarea>
                </div>
                <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn btn-edit-submit-skills">Submit</button>
                </div>
            </form>
      </div>
    </div>
  </div>
</div>
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
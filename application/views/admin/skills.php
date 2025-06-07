<div class="container-parent container w-50 mt-5" data-page="<?= $page?>">
    <div class="div-skills-forms">
        <div class="bg-dark p-5 my-3 rounded"> 
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Skill</label>
                    <input type="text" class="form-control" id="inputSkillName">
                </div>
                <div class="mb-3"> <!-- rename in tbl_skills progress to skill_progress -->
                    <label for="name" class="form-label">Progress</label>
                    <input type="text" class="form-control" id="inputSkillProgress">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description</label>
                    <textarea class="form-control" id="inputSkillDescription" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn btn-submit-skills">Submit</button>
            </form>
            <div class="div-logs">
            </div>
        </div>
    </div>
</div>
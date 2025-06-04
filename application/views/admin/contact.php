<div class="container w-50 mt-5">
    <div>
        <form method="POST" action="<?= base_url()?>index.php/" id="form-contact">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" >
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail"  required>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Subject</label>
                <input type="text" class="form-control" id="inputSubject" required>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="inputMessage" rows="10"></textarea>
            </div>
            <button type="button" class="btn btn-primary btn-submit-contact">Submit</button>
        </form>
    </div>
</div>
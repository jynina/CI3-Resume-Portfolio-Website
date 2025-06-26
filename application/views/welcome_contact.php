<div class="div-contact-form">
    <div class="container mt-5 w-lg-50">
        <a href="<?= base_url()?>"><img style="width: 5vh;"src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back-button"></a>
        <h1 class="text-center mb-5" data-aos="fade-up" data-aos-duration="500">Contact Me  :3</h1>
    <div>
    <form method="POST" action="<?= base_url()?>index.php/" id="form-contact">
        <div class="mb-3" data-aos="fade-up" data-aos-duration="500">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" >
        </div>
        <div class="mb-3" data-aos="fade-up" data-aos-duration="500">
            <label for="name" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail"  required>
        </div>
        <div class="mb-3" data-aos="fade-up" data-aos-duration="500">
            <label for="name" class="form-label">Subject</label>
            <input type="text" class="form-control" id="inputSubject" required>
        </div>
        <div class="mb-3" data-aos="fade-up" data-aos-duration="500">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="inputMessage" rows="10"></textarea>
        </div>
        <div class="d-flex"style="justify-content: end;" data-aos="fade-up" data-aos-duration="500">
            <button type="button" class="btn btn-primary btn-submit-contact">Submit</button>
        </div>
        
    </form>
</div>
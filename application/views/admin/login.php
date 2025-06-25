<div class="container mt-5 w-lg-50">
        <h1 class="text-center mb-5">Admin Login</h1>
    <div>
        <form method="POST" action="<?= base_url()?>index.php/" id="form-contact">
            <div class="mb-3">
                <label for="name" class="form-label">Username</label>
                <input type="text" class="form-control" id="inputUser" required>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPass"  required>
            </div>
            <button type="button" class="btn btn-primary btn-submit-login">Submit</button>
        </form>
    </div>
</div>
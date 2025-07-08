<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <link rel="icon" type="image/x-icon" href="<?=base_url()?>/upload/resume_logo1.png">
	<title>CI3 Portfolio</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<link rel="stylesheet" href="<?=base_url()?>assets/css/styles.css">
    <!-- <link rel="stylesheet" href="<?=base_url()?>assets/css/style.scss -->
    <!-- <link rel="stylesheet" href="<?=base_url()?>assets/css/style.css"> -->
	<link rel="stylesheet" href="<?=base_url()?>assets/css/loading-bar.css">
	<link rel="stylesheet" href="<?=base_url()?>assets/css/loading-bar.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
	<script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
	<link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
	<script src=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js "></script>
	<link href=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css " rel="stylesheet">
	<script src="<?= base_url()?>assets/js/loading-bar.js"></script>
	<script src="<?= base_url()?>assets/js/scripts.js"></script>
    <!-- <script src="<?= base_url()?>assets/js/main.js"></script> -->
	<script src="<?= base_url()?>assets/js/animation.js"></script>
	<script src="<?= base_url()?>assets/js/loading-bar.min.js"></script>
	<script src="<?= base_url()?>assets/js/NavOnScroll.js"></script>
	<script src="<?= base_url()?>assets/js/NavOnScroll.min.js"></script>
	<script src="<?= base_url()?>assets/js/jquery.waypoints.js"></script>
	<script src="<?= base_url()?>assets/js/jquery.waypoints.min.js"></script>
    <script src="<?= base_url()?>assets/js/particles.js"></script>
	<script src="<?= base_url()?>assets/js/particles.min.js"></script>
	<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
	<link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
	<script src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"></script>
	<script src="https://kit.fontawesome.com/6009e58553.js" crossorigin="anonymous"></script>
	<script src=" https://cdn.jsdelivr.net/npm/animejs@4.0.2/lib/anime.umd.min.js "></script>
    <script src=" https://cdn.jsdelivr.net/npm/vertical-timeline@2.0.0/assets/js/main.min.js "></script>
    <link href=" https://cdn.jsdelivr.net/npm/vertical-timeline@2.0.0/assets/css/style.min.css " rel="stylesheet">
    <script src="https://unpkg.com/@sidsbrmnn/scrollspy@1.x/dist/scrollspy.min.js"></script>
</head>
<body >
	<div class="container-fluid">
<input type="text" value="<?= base_url()?>" id="base_url" hidden>
<script>

    const options = {
        sectionSelector: 'section', 
        targetSelector: '.nav-link', // Query selector to your elements that will be added `active` class
        offset: 100                  // Menu item will active before scroll to a matched section 100px
    }

    // Shorter way
    scrollSpy('#navMain', options)

</script>

 
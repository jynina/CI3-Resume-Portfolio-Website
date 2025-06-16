
<script>
    var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });
</script>
<div class="container" id="client-page" style="margin-top:200px;">  
<div class="container-parent container mt-5">
<div id="typed-strings"><h1>Welcome to my <strong class="context-title">Website~!</strong></h1></div>
<span id="typed" class="fs-1"></span>

  <div class="d-flex div-about-me justify-content-end section-spacing"> 
  </div>
    <hr>
      <h1 class="circle-spacing text-center" data-aos="fade-up" data-aos-duration="800">SKILLS</h1>
  <div class="div-skills d-xl-flex d-lg-flex d-sm-inline my-5 pb-5 justify-content-center section-spacing">
  </div>
  <hr>
  <h1 class="circle-spacing text-center" data-aos="fade-up" data-aos-duration="800">EDUCATION</h1>
  <div class="div-education my-5 section-spacing text-center">
  </div>
  <hr>
  <h1 class="circle-spacing text-center" data-aos="fade-up" data-aos-duration="800">EXPERIENCES</h1>
  <div class="div-experience section-spacing text-center">
  </div>
  <hr>
  <h1 class="circle-spacing text-center" data-aos="fade-up" data-aos-duration="800">PROJECTS</h1>
  <div class="row div-projects my-5 section-spacing">
    <div class="project-item col-6" data-aos="fade-up">
      <h2 class="context-title" data-aos="fade-up" data-aos-duration="1000">${proj.project_name}</h2>
      <h3 class="context-subtitle" data-aos="fade-up" data-aos-duration="1200">${proj.project_role}</h3>
      <h5 class="context-tech" data-aos="fade-up" data-aos-duration="1400">${proj.project_tech}</h5>
      <p class="context-desc" data-aos="fade-up" data-aos-duration="1800">${proj.project_desc}</p>
      <div class="context-images" data-aos="fade-up" data-aos-duration="1800">
          <div class="carousel" data-carousel>
            <button class="carousel-button prev" data-carousel-button>&#8592;</button>
            <button class="carousel-button next" data-carousel-button>&#8594;</button>
            <ul class="proj-image-slides"data-slides>
              <!-- <li class="slide" data-active>
                <img src="<?= base_url()?>upload/blush.png"  alt="">
              </li>
              <li class="slide">
                <img src="<?= base_url()?>upload/cry.png" alt="">
              </li>
              <li class="slide">
                <img src="<?= base_url()?>upload/pedro.png" alt="">
              </li> -->
            </ul>
          </div>
      </div>
      </div>
  </div>
  <hr> 
  <div class="div-btn-contact text-center" >
    <a href="<?= base_url()?>welcome_contact" class="btn btn-transparent text-light" style="width: 500px;height: 100px;font-size: 40px;font-weight: bold;">Contact Me :D</a>
  </div>
</div>
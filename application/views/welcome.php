
<script>
    var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });

</script>

<div class="container" id="client-page" >  
  <div class="container-parent container" style="margin-top:20vh">
  <div id="typed-strings"><h1>Welcome to my <strong class="context-title">Website~!</strong></h1></div>
  <span id="typed" class="fs-1"></span>

    <div class="d-flex div-about-me justify-content-end section-spacing" id="about-page"> 
    </div>
      <hr>
        <h1 class="circle-spacing text-center mt-5" id="skills-page" data-aos="fade-up" data-aos-duration="800">SKILLS</h1>
    <div class="div-skills d-xl-flex d-lg-flex d-sm-inline ms-5 py-5 justify-content-center section-spacing">
    </div>
    <hr>
    <h1 class="circle-spacing text-center mt-5" id="education-page" data-aos="fade-up" data-aos-duration="800">EDUCATION</h1>
    <div class="div-education my-5 section-spacing text-center">
    </div>
    <hr>
    <h1 class="circle-spacing text-center mt-5" id="experiences-page" data-aos="fade-up" data-aos-duration="800">EXPERIENCES</h1>
    <div class="div-experience section-spacing text-center">
    </div>
    <hr>
    <h1 class="circle-spacing text-center mt-5" id="projects-page" data-aos="fade-up" data-aos-duration="800">PROJECTS</h1>
    <div class="row div-projects my-5 section-spacing">
       <!-- <div class="project-item col-6 mt-5" data-aos="fade-up">
          <h2 class="context-title">${proj.project_name}</h2>
          <h3 class="context-subtitle">${proj.project_role}</h3>
          <h5 class="context-tech">${proj.project_tech}</h5>
          <p class="context-desc">${proj.project_desc}</p>
    
          <section class="splide" aria-label="Splide Basic HTML Example">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">Slide 01</li>
                <li class="splide__slide">Slide 02</li>
                <li class="splide__slide">Slide 03</li>
              </ul>
            </div>
          </section>
        </div> -->
    </div>
    <hr> 
  <div class="div-btn-contact text-center" >
    <a href="<?= base_url()?>welcome_contact" class="btn btn-transparent text-light" style="width: 500px;height: 100px;font-size: 40px;font-weight: bold;">Contact Me :D</a>
  </div>
</div>
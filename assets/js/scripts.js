//constants
Dropzone.autoDiscover = false;

$(document).ready(function () {

AOS.init();
var fetch_url = $('.container-parent').attr('data-page');
console.log(fetch_url)
var orig_base_url = $("#base_url").val();
  
  function ApiHelperInput(base_url)
  {
    this.base_url = base_url;

  }

  //HELPERS
  ApiHelperInput.prototype.post = function(url, data)
  {
    $.ajax({
        url: this.base_url +  url,
        method: 'POST',
        data: data,
        processData: false,
        contentType: false,
        success: function(){
          toastr.success('Info has been sent', 'Nice');
        },
        error: function(){
          toastr.error('May mali', 'Irror')
        }
      });
  }

  var api = new ApiHelperInput($("#base_url").val());

//DropZone

  if($('#myDropzoneProfile').length)
  {
    var myDropzone = new Dropzone("#myDropzoneProfile", {    
    url: orig_base_url + "upload_image", 
    addRemoveLinks: true,
    autoProcessQueue: false,
    init: function () {
      this.on("sending", function (file, xhr, formData) {
        formData.append("origin", fetch_url);
        });
      this.on("removedFile")//edit this for edit modal remove
      }
  });


  }

  if($('#myDropzoneMultiple').length)
  {
    var myDropzone = new Dropzone("#myDropzoneMultiple", {    
    url: orig_base_url + "upload_image", 
    addRemoveLinks: true,
    autoProcessQueue: false,
    uploadMultiple: true,
    init: function () {
      this.on("sending", function (file, xhr, formData) {
        console.log("foreign_id to send:", this.options.params.foreign_id);
        formData.append("origin", fetch_url);
        formData.append("foreign_id", this.options.params.foreign_id);
      });
    },
    success: function()
    {
      toastr.success('Check mo parin network tho','ANG GALING MONG MAGCODE');
    },
    error: function()
    {
      toastr.error('Tignan mo ulit code mo pls', 'BOBO MO MAGCODE')
    }
  });
  }

  uploadedFiles.forEach(file => {
    const mockFile = { name: file.name, size: file.size };

    dropzoneInstance.emit("addedfile", mockFile);
    dropzoneInstance.emit("thumbnail", mockFile, file.url);
    dropzoneInstance.emit("complete", mockFile);

    dropzoneInstance.files.push(mockFile);
  });

  //navigation links
  
  $('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  
  }); //
  
  if ($('#admin-page').length > 0){
    loadTableDataAdmin(fetch_url);
  }

  if ($('#client-page').length > 0) {
    loadTableDataClient();
  }

  function loadTableDataAdmin(fetch_url) {
    $.ajax({
      url: orig_base_url + 'get_data',
      method: 'GET',
      data: { table: fetch_url},
      dataType: 'json',
      success: function(data) {
        toastr.success(data,'success')
          let html = ``;
          data.forEach(function(row){
            if(fetch_url == 'personal_info'){
              $('#inputName').val(row.name);
              $('#inputTitle').val(row.professional_title);
              $('#inputDesc').val(row.introduction);
              // $.get(`${orig_base_urlbase_url}get_project_files?project_id=${item_id}`, function (data) {
              //   const uploadedFiles = JSON.parse(data);
              //   preloadImages(uploadedFiles);
              // }); 
              // iba pa to

            }
            if (fetch_url == 'education'){
              html += `<div class="log-row border border-white rounded my-3" data-id= ${row.id} data-isactive=${row.is_active}>
                          <div class="row my-3">
                              <div class="col-6 mx-3 institution-name">
                                <label class="fw-bold">Institution Name</label>
                                  <p>${row.institution_name}</p>
                              </div>
                              <div class="col-3 educ-level">
                                <label class="fw-bold">Education Level</label>
                                  <p>${row.education_level}</p>
                              </div>
                              <div class="col-2 acad-year">
                              <label class="fw-bold">Academic Year</label>
                                  <p>${row.acad_year}</p>
                              </div>
                              <div class="col-11 mx-3 institution-desc" style="text-align: justify;">
                              <label class="fw-bold">Institution Description</label>
                                  <p>
                                  ${row.institution_desc}
                                  </p>
                              </div>
                            <div class="col-11 mx-3 log-buttons" style="text-align: end;">
                            <button type="button" class='btn btn-secondary btn-edit' data-id= ${row.id} data-bs-toggle="modal" data-bs-target="#editModal">
                              Edit
                              </button>
                                  <button type="button" class='btn btn-danger btn-delete' data-id= ${row.id}>
                                  Delete
                                  </button>
                                  <button type="button" class='btn btn-success btn-activate' data-id= ${row.id}>
                                    Activate
                                  </button>
                              </div>
                          </div>
                        </div>`
            }
            else if (fetch_url == 'skills'){
              html +=
              `
              <div class="log-row border border-white rounded my-3" data-id= ${row.id} data-isactive=${row.is_active}>
                    <div class="row my-3">
                        <div class="col-6 mx-3 skill-name">
                            <label class="fw-bold">Skill Name</label>
                            <p>${row.skill_name}</p>
                        </div>
                        <div class="col-3 skill-progress">
                            <label class="fw-bold">Skill Progress</label>
                            <p>${row.skill_progress}</p>
                        </div>
                        <div class="col-2 skill-createdat">
                          <label class="fw-bold">Date Created</label>
                            <p>${row.created_at}</p>
                        </div>
                        <div class="col-11 mx-3 skill-desc" style="text-align: justify;">
                          <label class="fw-bold">Skill Description</label>
                            <p>
                            ${row.skill_desc}
                            </p>
                        </div>
                        <div class="col-11 mx-3 log-buttons" style="text-align: end;">
                        <button type="button" class='btn btn-secondary btn-edit' data-id= ${row.id} data-bs-toggle="modal" data-bs-target="#editModal">
                          Edit
                          </button>
                                  <button type="button" class='btn btn-danger btn-delete' data-id= ${row.id}>
                                  Delete
                                  </button>
                                  <button type="button" class='btn btn-success btn-activate' data-id= ${row.id}>
                                    Activate
                                  </button>
                              </div>
                    </div>
                </div>
              `
            }
            else if (fetch_url == 'projects') {
              let imageHTML = '';
              console.log(row);
              if (row.images && row.images.length > 0) {
                imageHTML = row.images.map(img => `
                  <img src="${img.file_path}" alt="project image" style="width: 100px; height: auto;" />
                `).join('');
              } else {
                imageHTML = '<p>No images</p>';
              }

              html += `
                <div class="log-row border border-white rounded my-3" data-id=${row.id} data-isactive=${row.is_active}>
                  <div class="row my-3">
                    <div class="col-6 mx-3 proj-name">
                      <p>${row.project_name}</p>
                    </div>
                    <div class="col-3 proj-role">
                      <p>${row.project_role}</p>
                    </div>
                    <div class="col-11 mx-3 proj-tech" style="text-align: justify;">
                      <p>${row.project_tech}</p>
                    </div>
                    <div class="col-11 mx-3 proj-desc" style="text-align: justify;">
                      <p>${row.project_desc}</p>
                    </div>
                    <div class="col-11 mx-3 proj-images d-flex flex-wrap gap-2">
                      ${imageHTML}
                    </div>
                    <div class="col-11 mx-3 log-buttons" style="text-align: end;">
                      <button type="button" class='btn btn-secondary btn-edit' data-id=${row.id} data-bs-toggle="modal" data-bs-target="#editModal">
                        Edit
                      </button>
                      <button type="button" class='btn btn-danger btn-delete' data-id=${row.id}>
                        Delete
                      </button>
                      <button type="button" class='btn btn-success btn-activate' data-id=${row.id}>
                        Activate
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }
            
            else if (fetch_url == 'exp') {
              html +=
              `
              <div class="log-row border border-white rounded my-3" data-id= ${row.id} data-isactive=${row.is_active}>
                          <div class="row my-3">
                              <div class="col-6 mx-3 exp-title">
                              <label class="fw-bold">Professional Title</label>
                                  <p>${row.professional_title}</p>
                              </div>
                              <div class="col-3 company-name">
                              <label class="fw-bold">Company Name</label>
                                  <p>${row.company_name}</p>
                              </div>
                              <div class="col-2 prof-year">
                              <label class="fw-bold">Professional Year</label>
                                  <p>${row.prof_year}</p>
                              </div>
                              <div class="col-11 mx-3 company-desc" style="text-align: justify;">
                              <label class="fw-bold">Company Description</label>
                                  <p>
                                  ${row.company_desc}
                                  </p>
                              </div>
                              <div class="col-11 mx-3 log-buttons" style="text-align: end;">
                              <button type="button" class='btn btn-secondary btn-edit' data-id= ${row.id} data-bs-toggle="modal" data-bs-target="#editModal">
                                Edit
                                </button>
                                  <button type="button" class='btn btn-danger btn-delete' data-id= ${row.id}>
                                  Delete
                                  </button>
                                  <button type="button" class='btn btn-success btn-activate' data-id= ${row.id}>
                                    Activate
                                  </button>
                              </div>
                          </div>
                        </div>
              ` 
            }
            else if (fetch_url == 'contact')
            {
              html +=
              `
             <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button px-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" >
                <div class="row w-100">
                    <div class="col-4 col-md-4 my-2 text-truncate">
                        <span>${row.contact_name}</span>
                    </div>
                    <div class="col-6 col-md-4 my-2 text-truncate">
                        <span class="fw-bold d-flex">${row.contact_subject}</span>
                    </div>
                    <div class="col-2 col-md-4 my-2">
                        <span>${row.created_at}</span>
                    </div>
                </div>
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body p-4">
                <span class="fw-italic text-secondary">${row.contact_email}</span></br></br>
                <span class="fw-bold">${row.contact_subject}</span>
                <span> - ${row.contact_message}</span>
            </div>
            </div>
        </div>
              `
              
            }
          })
          $(".div-logs").append(html)
          
        $('.log-row').each(function () {
          const isActive = $(this).data('isactive');
          if (isActive == 1) {
            $(this).addClass('active');
          }
          });
        },
        error: function (status, error)
        {
          toastr.error(status, error);
        }
    })  
  }

  function loadTableDataClient(){
    $.ajax({
      url: orig_base_url + 'get_all_data',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        toastr.success('Ngaleng', 'Data successfully loaded')
        var personal_info = data.personal_info[0];
        var skills = data.skills;
        var education = data.education;
        var experience = data.experience;
        var project = data.projects;
        var images = data.files;

        $('.div-about-me').append(`
        <div " class="text-end w-50 me-5">
          <h1 data-aos="fade-left" data-aos-duration="1000" class="context-title">Hi, I'm ${personal_info.name}</h1>
          <h3 data-aos="fade-left" data-aos-duration="1500" class="context-subtitle">${personal_info.professional_title}</h3>
          <p data-aos="fade-left" data-aos-duration="2000">${personal_info.introduction}</p>
          </div>
          <img class="profile-img" src="upload/pedro.png" alt="" data-aos="zoom-in"> 
        `);
        console.log('test')

        skills.forEach(skill => {
          console.log(skill.skill_name);
        
          $('.div-skills').append(
            `
        <div class="skill-container d-flex col-4 text-center my-5" data-aos="zoom-in">
          <div class="circular-progress">
            <div class="d-block">
              <span class="progress-skill-name">${skill.skill_name}</span>
              <br>
              <span data-progressvalue = "${skill.skill_progress}" class="progress-value justify-content-center">0%</span>
              </div>
          </div>
        </div>
        `);
        //animation
         $('.skill-container').each(function () {
          const container = $(this);
          const circularProgress = container.find(".circular-progress");
          const progressValue = container.find(".progress-value");

          let progressStartValue = 0;
          const progressEndValue = parseInt(progressValue.attr('data-progressvalue'));
          const speed = 20;

          const progress = setInterval(() => {
              progressStartValue++;

              progressValue.text(`${progressStartValue}%`);
              circularProgress.css('background', `conic-gradient(rgb(186, 248, 248) ${progressStartValue * 3.6}deg, #ededed 0deg)`);

              if (progressStartValue >= progressEndValue) {
                  clearInterval(progress);
              }
            }, speed);
          });
        })
        education.forEach(edu => {
          console.log(edu);
          $('.div-education').append(
            `
            <div class="education-item">
              <h2 class="context-title" data-aos="fade-up" data-aos-duration="800">${edu.institution_name}</h2>
              <h3 class="context-subtitle" data-aos="fade-up" data-aos-duration="1000">${edu.education_level}</h3>
              <h5 data-aos="fade-up" data-aos-duration="1200">${edu.acad_year}</h5>
            </div>
            `
          )
        })
        experience.forEach(exp => {
          $('.div-experience').append(
            `
            <div class="experience-item" data-aos="fade-up">
              <h2 class="context-title" data-aos="fade-up" data-aos-duration="1000">${exp.professional_title}</h2>
              <h3 class="context-subtitle" data-aos="fade-up" data-aos-duration="1200">${exp.company_name}</h3>
              <h5 data-aos="fade-up" data-aos-duration="1400">${exp.prof_year}</h5>
              <p data-aos="fade-up" data-aos-duration="1800"> ${exp.company_desc}</p>
          </div>
            `
          );
        });
        project.forEach(proj => {
          let files = [];
          $('.div-projects').append(
            `
            <div class="project-item col-6" data-aos="fade-up">
              <h2 class="context-title" data-aos="fade-up" data-aos-duration="1000">${proj.project_name}</h2>
              <h3 class="context-subtitle" data-aos="fade-up" data-aos-duration="1200">${proj.project_role}</h3>
              <h5 class="context-tech" data-aos="fade-up" data-aos-duration="1400">${proj.project_tech}</h5>
              <p class="context-desc" data-aos="fade-up" data-aos-duration="1800">${proj.project_desc}</p>
              <div class="context-images"></div>
            </div>
            `
          );
          images.forEach(file =>{
            if (file.foreign_id == proj.id){
              files = file
              console.log(files)
              

              $('.proj-image-slides').append(
                `
                <li class="slide">
                  <img src="${orig_base_url}${file.file_path}"  alt="">
                </li>
                `
              )
            }
          })
        });
      },
      error: function (status) {
        toastr.error(status,'Something is wrong')
      }

    })
  }

  //log-row buttonw

  $(document).on('click', '.btn-delete', function () {
    let button = $(this);
    let item_id = button.data('id');
    let parentRow = button.closest('.log-row');

    if (!confirm('Are you sure you want to delete this item?')) return;

    $.ajax({
      url: orig_base_url + 'update_status',
      method: 'POST',
      data: {
        id: item_id,
        table: fetch_url
      },
      dataType: 'json',
      success: function (res) {
        if (res.status === 'success') {
          toastr.success(res.message);
          parentRow.remove();
        } else {
          toastr.warning(res.message);
        }
      },
      error: function () {
        toastr.error('Something went wrong.');
      }
    });
  });

  $(document).on('click', '.btn-activate', function () {
    let button = $(this);
    let item_id = button.data('id');
    let parentRow = button.closest('.log-row');
    let currentStatus = parseInt(parentRow.attr('data-isactive')); 
    let newStatus = currentStatus === 1 ? 0 : 1;    

    $.ajax({
      url: orig_base_url + 'update_active',
      method: 'POST',
      data: {
        id: item_id,
        table: fetch_url,
        is_active: newStatus 
      },
      dataType: 'json',
      success: function (res) {
        if (res.status === 'success') {
          parentRow.attr('data-isactive', newStatus);

          parentRow.toggleClass('active', newStatus === 1);

          toastr.success(res.message);
        } else {
          toastr.warning(res.message);
        }
      },
      error: function () {
        toastr.error('Something went wrong.');
      }
    });
  });

  $(document).on('click', '.btn-edit', function () {
    let button = $(this);
    let item_id = button.data('id');
    let parentRow = button.closest('.log-row');

    if (fetch_url === 'education') {
      $('#hiddenID').val(item_id);
      $('#editInstitution').val(parentRow.find('.institution-name p').text().trim());
      $('#editLevel').val(parentRow.find('.educ-level p').text().trim());
      $('#editAcadYear').val(parentRow.find('.acad-year p').text().trim());
      $('#editEducDescription').val(parentRow.find('.institution-desc p').text().trim());
       // Save the ID for submission
    }
    else if (fetch_url == 'skills') {
      $('#editSkillName').val(parentRow.find('.skill-name p').text().trim());
      $('#editSkillProgress').val(parentRow.find('.skill-progress p').text().trim());
      $('#editSkillDescription').val(parentRow.find('.skill-desc p').text().trim());
    }
    else if (fetch_url == 'projects') {

      $.get(`${orig_base_urlbase_url}get_project_files?project_id=${item_id}`, function (data) {
        const uploadedFiles = JSON.parse(data);
        preloadImages(uploadedFiles);
      });

      $('#editProjectName').val(parentRow.find('.proj-name p').text().trim());
      $('#editRole').val(parentRow.find('.proj-role p').text().trim());
      $('#editTechnologies').val(parentRow.find('.proj-tech p').text().trim());
      $('#editProjectDescription').val(parentRow.find('.proj-desc p').text().trim());
    }
    else if (fetch_url == 'exp') {
      $('#editCompanyTitle').val(parentRow.find('.exp-title p').text().trim());
      $('#editCompanyName').val(parentRow.find('.company-name p').text().trim());
      $('#editCompanyYears').val(parentRow.find('.prof-year p').text().trim());
      $('#editCompanyDesc').val(parentRow.find('.company-desc p').text().trim());
    }

  });
  
  $(document).on('click', '.btn-edit-submit-educ', function () {

    var formData = new FormData();

    formData.append('id', $('#hiddenID').val());
    formData.append('institution_name', $('#editInstitution').val());
    formData.append('education_level', $('#editLevel').val());
    formData.append('acad_year', $('#editAcadYear').val());
    formData.append('institution_desc', $('#editEducDescription').val());

    console.log(formData);
    api.post('update_educ', formData)

  });
  



  //submit buttons forms

  $('.btn-submit-contact').on('click', function(){

    var formData = new FormData();

    formData.append("contact_name", $('#inputName').val());
    formData.append("contact_email", $('#inputEmail').val());
    formData.append("contact_subject", $('#inputSubject').val());
    formData.append("contact_message", $('#inputMessage').val());

    console.log(formData);

    api.post('insert_contact', formData);
    
  });

  $('.btn-submit-about').on('click', function(){

    var formData = new FormData();

    formData.append('name', $('#inputName').val());
    formData.append('professional_title', $('#inputTitle').val());
    formData.append('introduction',  $('#inputDesc').val())

    console.log(formData)

    api.post('insert_about', formData);
  })

  $('.btn-submit-educ').on('click', function () {

    var formData = new FormData();

    formData.append('institution_name', $('#inputInstitution').val());
    formData.append('education_level', $('#inputLevel').val());
    formData.append('acad_year', $('#inputAcadYear').val());
    formData.append('institution_desc', $('#inputEducDescription').val());
    console.log(formData);

    api.post('insert_educ', formData)
  
  });

  $('.btn-submit-skills').on('click', function () {
    var formData = new FormData();
    $inputSkill = parseInt($("#inputSkillProgress").val());


    if(typeof $inputSkill === 'string' || $inputSkill < 0 )
    {
      toastr.error("Check your inputs","Error");
    }
    else{
      formData.append("skill_name", $("#inputSkillName").val());
      formData.append("skill_progress", $inputSkill);
      formData.append("skill_desc", $("#inputSkillDescription").val());
      api.post('insert_skills', formData);
    }
  });

  $('.btn-submit-exp').on('click', function () {
    var formData = new FormData();

    formData.append("professional_title", $("#inputCompanyTitle").val());
    formData.append("company_name", $("#inputCompanyName").val());
    formData.append("prof_year", $("#inputCompanyYears").val());
    formData.append("company_desc", $("#inputCompanyDesc").val());

    api.post('insert_exp', formData);
  });

  $('.btn-submit-projects').on('click', function () {

    if(myDropzone.files.length === 0){
      toastr.error("Please input all of the fields", "Incomplete fields");
    }
    else
    {
       var formData = new FormData();

      formData.append("project_name", $("#inputProjectName").val());
      formData.append("project_role", $("#inputRole").val());
      formData.append("project_tech", $("#inputTechnologies").val());
      formData.append("project_desc", $("#inputProjectDescription").val());

      $.ajax({
        url: orig_base_url + 'insert_projects',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(res){
          let response = JSON.parse(res);
          let new_id = response.new_id; // Return this from PHP
          let origin = 'projects';
      
          // Save this info for Dropzone later
          myDropzone.options.params = { foreign_id: new_id, origin: origin };
      
          myDropzone.processQueue();
        }
      });
    }
  });

  //Others
  $('.snow-button').on('mousemove', function (e) {
    let $snowflake = $('<div class="snowflake">❅</div>');
    $snowflake.css({
      left: e.pageX + (Math.random() * 20 - 10) + 'px',
      top: e.pageY + 'px'
    });
    $('body').append($snowflake);

    setTimeout(() => {
      $snowflake.remove();
    }, 2000);
  });



});

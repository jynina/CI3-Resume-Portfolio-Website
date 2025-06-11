//constants
Dropzone.autoDiscover = false;

$(document).ready(function () {
let circle = document.querySelectorAll('.circle');
    circle.forEach(function(progress){
        let degree = 0;
        var targetDegree = parseInt(progress.getAttribute('data-degree'));
        let color = progress.getAttribute('data-color');
        let number = progress.querySelector('.number');

        var interval = setInterval(function(){
            degree += 1;
            if (degree > degree){
                clearInterval();
                return;
            }
            progress.style.background = `conic-gradient(${color} ${degree}%, #222, 0%)`;
        })
    })
AOS.init();
var fetch_url = $('.container-parent').attr('data-page');
console.log(fetch_url)
var orig_base_url = $("#base_url").val();
  
  function ApiHelper(base_url)
  {
    this.base_url = base_url;

  }

  //HELPERS
  ApiHelper.prototype.post = function(url, data)
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

 var api = new ApiHelper($("#base_url").val());

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
        formData.append("origin", fetch_url);
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

  //navigation links
  
  $('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  
  }); //improve


  // $.ajax({
  //   url: orig_base_url + 'get_all_data',
  //   method: 'GET',
  //   dataType: 'json'

  // })

  $('.nav-education').on('click', function (){//remove this
    $.ajax({
      url: orig_base_url + 'get_data',
      method: 'GET',
      data: { table: fetch_url},
      dataType: 'json',
      success: function(data) {
        toastr.success(data,'success')
          let html = ``;
          data.forEach(function(row){
            if (fetch_url == 'education'){
              html += `<div class="log-row border border-white rounded my-3">
                          <div class="row my-3">
                              <div class="col-6 mx-3">
                                  <p>${row.institution_name}</p>
                              </div>
                              <div class="col-3">
                                  <p>${row.education_level}</p>
                              </div>
                              <div class="col-2">
                                  <p>${row.acad_year}</p>
                              </div>
                              <div class="col-11 mx-3" style="text-align: justify;">
                                  <p>
                                  ${row.institution_desc}
                                  </p>
                              </div>
                              <div class="col-11 mx-3">
                                  award images
                              </div>
                          </div>
                        </div>`
            }
            else if (fetch_url == 'skills'){
              html +=
              `
              <div class="log-row border border-white rounded my-3">
                    <div class="row my-3">
                        <div class="col-6 mx-3">
                            <p>${row.skill_name}</p>
                        </div>
                        <div class="col-3">
                            <p>${row.skill_progress}</p>
                        </div>
                        <div class="col-2">
                            <p>${row.created_at}</p>
                        </div>
                        <div class="col-11 mx-3" style="text-align: justify;">
                            <p>
                            ${row.skill_desc}
                            </p>
                        </div>
                    </div>
                </div>
              `
            }
            else if (fetch_url == 'projects') {
              html +=
              `
              <div class="log-row border border-white rounded my-3">
                          <div class="row my-3">
                              <div class="col-6 mx-3">
                                  <p>${row.project_name}</p>
                              </div>
                              <div class="col-3">
                                  <p>${row.project_role}</p>
                              </div>
                              <div class="col-11 mx-3" style="text-align: justify;"">
                                  <p>${row.project_tech}</p>
                              </div>
                              <div class="col-11 mx-3" style="text-align: justify;">
                                  <p>
                                  ${row.project_desc}
                                  </p>
                              </div>
                            <div class="col-11 mx-3">
                                project images
                            </div>
                        </div>
                      </div>
              `
            }
            else if (fetch_url == 'exp') {
              html +=
              `
              <div class="log-row border border-white rounded my-3">
                          <div class="row my-3">
                              <div class="col-6 mx-3">
                                  <p>${row.professional_title}</p>
                              </div>
                              <div class="col-3">
                                  <p>${row.company_name}</p>
                              </div>
                              <div class="col-2">
                                  <p>${row.prof_year}</p>
                              </div>
                              <div class="col-11 mx-3" style="text-align: justify;">
                                  <p>
                                  ${row.company_desc}
                                  </p>
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
            <button class="accordion-button px-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne">
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
          $(".div-education").append(fronthtml)
          
        },
        error: function (status, error)
        {
          toastr.error(status, error);
        }
    })
  })


  //submit buttons dropzone

  $('#btn-submit-about').click(function(){           
  myDropzone.processQueue();
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
      myDropzone.processQueue();

       var formData = new FormData();

      formData.append("project_name", $("#inputProjectName").val());
      formData.append("project_role", $("#inputRole").val());
      formData.append("project_tech", $("#inputTechnologies").val());
      formData.append("project_desc", $("#inputProjectDescription").val());

      api.post('insert_projects', formData);
    }
  });


  //Experimenting
  // $.ajax({
  //     url: base_url + 'index.php/get_info',
  //     method: 'POST',
  //     dataType: 'json',
  //     success: function(info){
  //       toastr.success('EYYY','ey ka muna');
  //       console.log(info);
  //       console.log(info.name);
  //       $('#inputName').attr('placeholder', '');
  //       $('#inputTitle').attr('placeholder', '');
  //       $('#inputDesc').attr('placeholder', '');
  //     }

  // })

  // async function fetchData(){
  // try
  // {
  //   const response = await fetch(base_url + 'fetch_inbox');
  //   console.log(response);
  //   if(!response.ok)
  //   {
  //     throw new Error('HTPP error! Status: ' + response.status)
  //   }
  // }
  // catch (error)
  // {

  // }
  // }

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

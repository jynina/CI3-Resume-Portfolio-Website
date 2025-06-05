//constants
Dropzone.autoDiscover = false;



$(document).ready(function () {
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
    url: orig_base_url + "index.php/upload_image", 
    addRemoveLinks: true,
    autoProcessQueue: false,
  });


  }

  if($('#myDropzoneMultiple').length)
  {
    var myDropzone = new Dropzone("#myDropzoneMultiple", {    
    url: orig_base_url + "index.php/upload_image", 
    addRemoveLinks: true,
    autoProcessQueue: false,
    uploadMultiple: true
  });

  }

  //navigation links
  
  $('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  
  });


  //submit buttons dropzone

  $('#btn-submit-profile').click(function(){           
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

    api.post('index.php/insert_contact', formData);
    
  });

  $('.btn-submit-about').on('click', function(){

    var formData = new FormData();

    formData.append('name', $('#inputName').val());
    formData.append('professional_title', $('#inputTitle').val());
    formData.append('introduction',  $('#inputDesc').val())

    console.log(formData)

    api.post('index.php/insert_about', formData);
  })

  $('.btn-submit-educ').on('click', function () {

    var formData = new FormData();

    formData.append('institution_name', $('#inputInstitution').val());
    formData.append('education_level', $('#inputLevel').val());
    formData.append('acad_year', $('#inputAcadYear').val());
    formData.append('institution_desc', $('#inputEducDescription').val());
    console.log(formData);

    api.post('index.php/insert_educ', formData)
  
  });

  $('.btn-submit-skills').on('click', function () {
    var formData = new FormData();

    formData.append("skill_name", $("#inputSkillName").val());
    formData.append("skill_progress", $("#inputSkillProgress").val());
    formData.append("skill_desc", $("#inputSkillDescription").val());

    api.post('index.php/insert_skills', formData);

  });

  $('.btn-submit-exp').on('click', function () {
    var formData = new FormData();

    formData.append("professional_title", $("#inputCompanyTitle").val());
    formData.append("company_name", $("#inputCompanyName").val());
    formData.append("prof_year", $("#inputCompanyYears").val());
    formData.append("company_desc", $("#inputCompanyDesc").val());

    api.post('index.php/insert_exp', formData);
  });

  $('.btn-submit-projects').on('click', function () {
    var formData = new FormData();

    formData.append("project_name", $("#inputProjectName").val());
    formData.append("project_role", $("#inputRole").val());
    formData.append("project_tech", $("#inputTechnologies").val());
    formData.append("project_desc", $("#inputProjectDescription").val());

    api.post('index.php/insert_projects', formData);
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

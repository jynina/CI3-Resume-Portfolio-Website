$(document).ready(function () {

//constants
var base_url = $('#base_url').val();
Dropzone.autoDiscover = false;

//HELPERS
  function post_send_data(url, data){
    console.log(base_url + '' + url);
    $.ajax({
      url: base_url + '' + url,
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

//API & LIBRARIES

//DropZone

  if($('#myDropzoneProfile').length)
  {
    var myDropzone = new Dropzone("#myDropzoneProfile", {    
    url: base_url + "index.php/upload_image", 
    addRemoveLinks: true,
    autoProcessQueue: false,
  });


  }

  if($('#myDropzoneMultiple').length)
  {
    var myDropzone = new Dropzone("#myDropzoneMultiple", {    
    url: base_url + "index.php/upload_image", 
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


  //add buttons

  $('.btn-add-skills').on('click', function(){
    let div_skills =
    `
    <div class="bg-dark p-5 my-3 rounded"> 
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Skill</label>
                <input type="email" class="form-control" id="inputSkillName">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Progress</label>
                <input type="email" class="form-control" id="inputSkillProgress">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Brief Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      `
    $(".div-skills-forms").append(div_skills);
  });

  $('.btn-add-exp').on('click', function(){
    let div_experience =
    `
    <div class="bg-dark p-5 my-3 rounded"> 
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Professional Title</label>
                    <input type="email" class="form-control" id="inputCompanyTitle">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Company Name</label>
                    <input type="email" class="form-control" id="inputCompanyName">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Years</label>
                    <input type="email" class="form-control" id="inputCompanyYears">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Brief Description</label>
                    <textarea class="form-control" id="inputCompanyDesc" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    `
    $(".div-exp-forms").append(div_experience);
  });

  $('.btn-add-education').on('click', function(){
    let div_education =
    `
    <div class="bg-dark p-5 my-3 rounded"> 
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Institution</label>
                <input type="email" class="form-control" id="inputInstitution">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Course/Education Level</label>
                <input type="email" class="form-control" id="inputLevel">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Academic Year</label>
                <input type="email" class="form-control" id="inputAcadYear">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Brief Description <span class="text-secondary">(Optional)</span></label>
                <textarea class="form-control" id="inputEducDescription" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    `
    $(".div-education-forms").append(div_education);
  })

  //submit buttons

  $('.btn-submit-contact').on('click', function(){

    var formData = new FormData();

    formData.append("contact_name", $('#inputName').val());
    formData.append("contact_email", $('#inputEmail').val());
    formData.append("contact_subject", $('#inputSubject').val());
    formData.append("contact_message", $('#inputMessage').val());

    console.log(formData);

    post_send_data('index.php/insert_contact', formData);
    
  });

  $('#btn-submit-profile').click(function(){           
  myDropzone.processQueue();
  });

  $('.btn-submit-about').on('click', function(){

    var formData = new FormData();

    formData.append('name', $('#inputName').val());
    formData.append('professional_title', $('#inputTitle').val());
    formData.append('introduction',  $('#inputDesc').val())

    console.log(formData)

    post_send_data('index.php/insert_about', formData);
  })

  $('.btn-submit-educ').on('click', function () {

    var formData = new FormData();

    formData.append('institution_name', $('#inputInstitution').val());
    formData.append('education_level', $('#inputLevel').val());
    formData.append('acad_year', $('#inputAcadYear').val());
    formData.append('institution_desc', $('#inputEducDescription').val());
    console.log(formData);

    post_send_data('index.php/insert_educ', formData)
  
  });

  //Experimenting
  $.ajax({
      url: base_url + 'index.php/get_info',
      method: 'POST',
      dataType: 'json',
      success: function(info){
        toastr.success('EYYY','ey ka muna');
        console.log(info);
        console.log(info.name);
        $('#inputName').attr('placeholder', '');
        $('#inputTitle').attr('placeholder', '');
        $('#inputDesc').attr('placeholder', '');
      }

  })

  async function fetchData(){
  try
  {
    const response = await fetch(base_url + 'fetch_inbox');
    console.log(response);
    if(!response.ok)
    {
      throw new Error('HTPP error! Status: ' + response.status)
    }
  }
  catch (error)
  {

  }
  }

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

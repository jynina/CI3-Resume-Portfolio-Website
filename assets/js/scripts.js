base_url = $('#base_url').val()
Dropzone.autoDiscover = false;

$(document).ready(function () {

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

  $(document).on('click', '.nav-link', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  
  });

  $('.btn-submit-contact').on('click', function(){

    var formData = new FormData();

    formData.append("contact_name", $('#inputName').val());
    formData.append("contact_email", $('#inputEmail').val());
    formData.append("contact_subject", $('#inputSubject').val());
    formData.append("contact_message", $('#inputMessage').val());

    console.log(formData);

    $.ajax({
      url: base_url + 'index.php/insert_contact',
      method: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(){
        toastr.success('Info has been sent', 'Nice');
      },
      error: function(){
        toastr.error('May mali', 'Irror')
      }
    })
    
  })

  //Inbox fetching
  fetch(base_url + 'fetch_inbox')
    .then(function(response){
      var data = response.json()
      return data;
    })
    .catch(function(err){
      console.log(err);
    });
  
  let inbox_string = ``


const myDropzone = new Dropzone("#myDropzone", {
  url: base_url + 'index.php/upload_image', 
  paramName: "file", // your CI controller/method URL
  autoProcessQueue: false,  // only upload on submit
  acceptedFiles: 'image/*',
  maxFiles: 1, // only 1 profile picture
});



document.getElementById("btn-submit-profile").addEventListener("click", function(e) {
  e.preventDefault();
  if (myDropzone.getQueuedFiles().length > 0) {
    myDropzone.processQueue();
  } else {
    alert("Please select an image.");
  }
});

myDropzone.on("success", function(file, response) {
  alert("Upload successful!");
  myDropzone.removeAllFiles(); 
});

myDropzone.on("error", function(file, errorMessage) {
  alert("Upload failed: " + errorMessage);
});
});

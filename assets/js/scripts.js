var base_url = $('#base_url').val()
$(document).ready(function () {
var base_url = $('#base_url').val()

  $.ajax({
      url: base_url + 'index.php/get_info',
      method: 'GET',
      dataType: 'json',
      success: function(info){
        toastr.success('EYYY','ey ka muna');
        console.log(info);
        $('#inputName').attr('placeholder', '');
        $('#inputTitle').attr('placeholder', '');
        $('#inputDesc').attr('placeholder', '');
      }

    })

  //Inbox fetching
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

    post_send_data('index.php/insert_contact', formData);
    
  });

  $('.btn-submit-about').on('click', function(){

    var formData = new FormData();

    formData.append('name', $('#inputName').val());
    formData.append('professional_title', $('#inputTitle').val());
    formData.append('introduction',  $('#inputDesc').val())

    console.log(formData)

    post_send_data('index.php/insert_about', formData);
  })

  $('.nav-about').on('click', function(){
    
  })

  let inbox_string = ``;

});

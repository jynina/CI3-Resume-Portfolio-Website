base_url = $('#base_url').val()

$(document).ready(function () {

  //Inbox fetching

  async function fetchData(){
    try
    {
      const response = await fetch(base_url + 'fetch_inbox');
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
    console.log('')

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

  let inbox_string = ``
});

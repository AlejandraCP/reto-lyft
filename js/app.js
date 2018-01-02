$(document).ready(function(){
  $(".view-log-sign").hide();
  function hideSplash() {
    $("#splash").fadeOut();
  }
  function showSecond(){
    $(".view-log-sign").fadeIn();
  }
  setTimeout(hideSplash, 1000);
  setTimeout(showSecond, 1200);
  
  // funcion usando plugin input telephone de jquery
  $('.input-phone').intlTelInput({
    utilsScript: "./vendors/build/js/utils.js"
  });
  
  var $input = $('#demo');
  var $buttonVerifNumber = $('#buttonVerifNumb');
  // función para validar número de celular

  $input.on('input', function(){
    var reNumbers = /^([0-9])*$/;
    if (reNumbers.test($(this).val()) && $(this).val().length === 10) {
      $buttonVerifNumber.attr('disabled', false);
      $buttonVerifNumber.css('background-color', '#e21a8f');
    } else {
      $buttonVerifNumber.attr('disabled', true);
    }
  })
  
  // Función que genera númeor ramdom
  var randomNumber = Math.floor(Math.random() * 1001);
  $buttonVerifNumber.on('click', function(e){
    e.preventDefault();
    alert('Tu código es : LAB - ' + randomNumber);
    localStorage.prueba = randomNumber;
    window.location.href = 'code.html';
  })

  
  var $inputRamdom = $('.input-ramdom');
  var $buttonNext = $('.button-next');
  var $resend = $('.resend');
  // función que genera nuevo codigo
  $resend.on('click', function(e){
    e.preventDefault();
    alert('Tu código es : LAB - ' + randomNumber);
    localStorage.prueba = randomNumber;
  })

  // Función que valida si es igual a númeror ramdom
  $inputRamdom.on('keyup', function(){
    console.log('hi');
    var inputValue = $(this).val();
    if (inputValue === localStorage.prueba){
      console.log('son iguales');
      $buttonNext.attr('disabled', false);
      $buttonNext.css('background-color', '#e21a8f');
    } else {
      $buttonNext.attr('disabled', true);
    }
  })

  // función si son iguales que direccione a otra página
  $buttonNext.on('click', function(){
    window.location.href = 'form.html';
  })

  // funciones que validan datos del formulario

  var $firstName = $('#first-name');
  var $lastName = $('#last-name');
  var $email = $('#email');

})



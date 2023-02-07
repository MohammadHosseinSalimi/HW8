
$('#count1').change(function change1() {
  let tprice = 0;
  let price = 0;
  price = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text());
  $('#price').text(String(price).concat(" ریال"));

  switch ($('#shiveersal').val()) {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 20;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;

  }

  $('#totalPrice').text(String(tprice).concat(" ریال"));
});

$('#count2').change(function change2() {
  let tprice = 0;
  let price = 0;
  price = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text());
  $('#price').text(String(price).concat(" ریال"));

  switch ($('#shiveersal :selected').val())
   {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) +20 ;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;
      default:
        tprice=0;
  }

  $('#totalPrice').text(String(tprice).concat(" ریال"));
});

$('#count3').change(function change3() {
  let tprice = 0;
  let price = 0;
  price = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text());
  $('#price').text(String(price).concat(" ریال"));


  switch ($('#shiveersal').val()) {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 20;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;

  }

  $('#totalPrice').text(String(tprice).concat(" ریال"));
});


$('#shiveersal').change(function() {
  let tprice = 0;

  switch ($('#shiveersal').val()) {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 20;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;

  }

  $('#totalPrice').text(String(tprice).concat(" ریال"));
});


$('#minus1').click(function () {
  let minus=0;
  if(parseInt($('#count1').val())!=0) 
  minus=parseInt($('#count1').val())-1;
  $('#count1').val(minus);



  let tprice = 0;
  let price = 0;
  price = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text());
  $('#price').text(String(price).concat(" ریال"));

  switch ($('#shiveersal :selected').val())
   {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) +20 ;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;
      default:
        tprice=0;
   }
   $('#totalPrice').text(String(tprice).concat(" ریال"));

  
});

$('#plus1').click(function () {
  let plus=0;
  plus=parseInt($('#count1').val())+1;
  $('#count1').val(plus);


  let tprice = 0;
  let price = 0;
  price = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text());
  $('#price').text(String(price).concat(" ریال"));

  switch ($('#shiveersal :selected').val())
   {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) +20 ;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;
      default:
        tprice=0;
      }
      $('#totalPrice').text(String(tprice).concat(" ریال"));

});

$('#minus2').click(function () {
  let minus=0;
  if(parseInt($('#count2').val())!=0) 
  minus=parseInt($('#count2').val())-1;
  $('#count2').val(minus);

  let tprice = 0;
  let price = 0;
  price = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text());
  $('#price').text(String(price).concat(" ریال"));

  switch ($('#shiveersal :selected').val())
   {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) +20 ;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;
      default:
        tprice=0;
      }
      $('#totalPrice').text(String(tprice).concat(" ریال"));

});

$('#plus2').click(function () {
  let plus=0;
  plus=parseInt($('#count2').val())+1;
  $('#count2').val(plus);

  let tprice = 0;
  let price = 0;
  price = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text());
  $('#price').text(String(price).concat(" ریال"));

  switch ($('#shiveersal :selected').val())
   {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) +20 ;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;
      default:
        tprice=0;
      }
      $('#totalPrice').text(String(tprice).concat(" ریال"));

});

$('#minus3').click(function () {
  let minus=0;
  if(parseInt($('#count3').val())!=0) 
  minus=parseInt($('#count3').val())-1;
  $('#count3').val(minus);

  let tprice = 0;
  let price = 0;
  price = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text());
  $('#price').text(String(price).concat(" ریال"));

  switch ($('#shiveersal :selected').val())
   {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) +20 ;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;
      default:
        tprice=0;
      }
      $('#totalPrice').text(String(tprice).concat(" ریال"));

});

$('#plus3').click(function () {
  let plus=0;
  plus=parseInt($('#count3').val())+1;
  $('#count3').val(plus);

  let tprice = 0;
  let price = 0;
  price = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text());
  $('#price').text(String(price).concat(" ریال"));

  switch ($('#shiveersal :selected').val())
   {
    case 'peyk':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 100;
      break;
    case 'postadi':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) +20 ;

      break;
    case 'postpishtaz':
      tprice = parseInt($('#count1').val()) * parseInt($('#price1').text()) + parseInt($('#count2').val()) * parseInt($('#price2').text()) + parseInt($('#count3').val()) * parseInt($('#price3').text()) + 50;
      break;
      default:
        tprice=0;
      }
      $('#totalPrice').text(String(tprice).concat(" ریال"));

});
// This is a JavaScript file

var letra, visorAtual, visor;

$(document).on("click",".letra", function(){
  navigator.notification.beep(1);
  letra = $(this).html();
  visorAtual = $('#visor').val();
  visor = visorAtual + letra;
  $('#visor').val(visor);
});

$(document).on("click","#x", function(){
  var input = $('#visor');
  input.val(input.val().slice(0, -1));
});

$(document).on("click","#limpar", function(){
  $('#visor').val("");
});

function acertou(){
   function certo(){
      visor = $('#visor').val("");
    }
    navigator.notification.alert("Você descobriu a palavra!", certo,"PARABÉNS");
}

function errou(){
  navigator.vibrate(300);
    function errado(){
      visor = $('#visor').val("");
    }
    navigator.notification.alert("Tente novamente...", errado,"NÃO FOI DESSA VEZ");
}

$(document).on("click","#responder", function(){
  if (visor == "CASTELO"){
   acertou();
  }
  else{
    errou();
  }
});
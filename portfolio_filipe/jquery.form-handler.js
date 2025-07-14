
$(document).ready(function () {
  $("#formContato").on("submit", function (e) {
    e.preventDefault();

    let nome = $("#nome").val().trim();
    let email = $("#email").val().trim();
    let mensagem = $("#mensagem").val().trim();

    if (!nome || !email || !mensagem) {
      $("#mensagemRetorno").text("Por favor, preencha todos os campos.").css("color", "red");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $("#mensagemRetorno").text("Digite um e-mail válido.").css("color", "red");
      return;
    }

    $("#mensagemRetorno").text("Mensagem enviada com sucesso!").css("color", "green");
    $(this)[0].reset();
  });
});

function sum() {
  var x, y, text, soma;

  //Pegar o valor de x e y na id="numb"
  x = parseFloat(document.getElementById("numb").value);
  y = parseFloat(document.getElementById("numb2").value);
  soma = x + y
  //esta validando se o campo digitado é um número e se o campo não esta em branco
  if (isNaN(x) || x === "") {
    text = "Digite apenas números e não deixe nenhum campo em branco";
    document.getElementById("demo").innerHTML = text;
  } else if (isNaN(y) || y === "") {
    text = "Digite apenas número e não deixe nenhum campo em branco";
    document.getElementById("demo").innerHTML = text;
  } else {
    text = "A soma dos valores indicados é:" ;
      document.getElementById("demo").innerHTML = text;
  document.getElementById("res").innerHTML = soma;
  }

}
function minus() {
  var x, y, text, subtracao;

  //Pegar o valor de x e y na id="numb"
  x = parseFloat(document.getElementById("numb").value);
  y = parseFloat(document.getElementById("numb2").value);
  subtracao = x - y
  //esta validando se o campo digitado é um número e se o campo não esta em branco
  if (isNaN(x) || x === "") {
    text = "Digite apenas números e não deixe nenhum campo em branco";
    document.getElementById("demo").innerHTML = text;
  } else if (isNaN(y) || y === "") {
    text = "Digite apenas números e não deixe nenhum campo em branco";
    document.getElementById("demo").innerHTML = text;
  } else {
    text = "A subtração dos valores indicados é:" ;
      document.getElementById("demo").innerHTML = text;
  document.getElementById("res").innerHTML = subtracao;
  }

}
function mult() {
  var x, y, text, mult;

  //Pegar o valor de x e y na id="numb"
  x = parseFloat(document.getElementById("numb").value);
  y = parseFloat(document.getElementById("numb2").value);
  mult = x * y
  //esta validando se o campo digitado é um número e se o campo não esta em branco
  if (isNaN(x) || x === "") {
    text = "Digite apenas números e não deixe nenhum campo em branco";
    document.getElementById("demo").innerHTML = text;
  } else if (isNaN(y) || y === "") {
    text = "Digite apenas números e não deixe nenhum campo em branco";
    document.getElementById("demo").innerHTML = text;
  } else {
    text = "A multiplicação dos valores indicados é:" ;
      document.getElementById("demo").innerHTML = text;
  document.getElementById("res").innerHTML = mult;
  }

}
function divisao() {
  var x, y, text, divi;

  //Pegar o valor de x e y na id="numb"
  x = parseFloat(document.getElementById("numb").value);
  y = parseFloat(document.getElementById("numb2").value);
  divi = x / y
  //esta validando se o campo digitado é um número e se o campo não esta em branco
  if (isNaN(x) || x == "") {
    text = "Digite apenas números, não deixe nenhum campo em branco e não tente dividir por zero";
    document.getElementById("demo").innerHTML = text;
    document.getElementById("res").innerHTML = "";
  } else if (isNaN(y) || y == "") {
    text = "Digite apenas números, não deixe nenhum campo em branco e não tente dividir por zero";
    document.getElementById("demo").innerHTML = text;
    document.getElementById("res").innerHTML = "";
  } else {
    text = "A divisão dos valores indicados é:" ;
      document.getElementById("demo").innerHTML = text;
  document.getElementById("res").innerHTML = divi;
  }

}
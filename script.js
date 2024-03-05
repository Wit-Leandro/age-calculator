const btn = document.querySelector(".imagem");
var resyyyy = document.querySelector(".resyyyy");
var resmm = document.querySelector(".resmm");
var resdd = document.querySelector(".resdd");

btn.addEventListener("click", calculartempodevida);

function calculartempodevida() {
  var diaNasc = document.getElementById("txtdd").value;
  var mesNasc = document.getElementById("txtmm").value;
  var anoNasc = document.getElementById("txtyyyy").value;

  if (diaNasc === "" || mesNasc === "" || anoNasc === "") {
    var spanday = document.querySelector(".spanday");
    var spanmes = document.querySelector(".spanmes");
    var spanano = document.querySelector(".spanano");
    var img = document.querySelector(".imagem").style.width = '50px';
    var day = document.querySelector(".day").style.color = '#f23f5d';
    var month = document.querySelector(".month").style.color = '#f23f5d';
    var year = document.querySelector(".year").style.color = '#f23f5d';
    spanday.innerHTML = "Must be a valid day";
    spanmes.innerHTML = "Must be a valid mounth";
    spanano.innerHTML = "Must be in the past";

  } else if (isNaN(diaNasc) || isNaN(mesNasc) || isNaN(anoNasc)) {
    alert("insira apenas numeros");
  } else {
    var dataNascDate = new Date(anoNasc, mesNasc - 1, diaNasc);

    var dataReal = new Date();

    var difMiiSeg = dataReal - dataNascDate;

    var yyyy = Math.floor(difMiiSeg / (365.25 * 24 * 60 * 60 * 1000));

    var mm = Math.floor(
      (difMiiSeg % (365.25 * 24 * 60 * 60 * 1000)) /
        (30.44 * 24 * 60 * 60 * 1000)
    );

    var dd = Math.floor(
      (difMiiSeg % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
    );

    if (diaNasc == 0 || diaNasc > 31) {
    }

    resyyyy.innerHTML = yyyy;
    resmm.innerHTML = mm;
    resdd.innerHTML = dd;

    console.log();
  }
}

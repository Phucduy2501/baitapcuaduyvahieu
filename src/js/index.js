let giotNuoc = document.getElementById("giotnuoc");

giotNuoc.onclick = function () {
  let dataImg = document.getElementById("rightdata");

  console.log(dataImg);

  dataImg.src = "./public/img/sells-by-country.png";
};

console.log(giotNuoc);

let nao = document.getElementById("nao");
console.log(nao);

nao.onclick = function () {
  let dataImg = document.getElementById("rightdata");

  dataImg.src = "./public/img/collaboration.png";
};

let daoNguoc = document.getElementById("daonguoc");
console.log(daoNguoc);

daoNguoc.onclick = function () {
  let dataImg = document.getElementById("rightdata");

  console.log(dataImg);

  dataImg.src = "./public/img/sells-by-country.png";
};

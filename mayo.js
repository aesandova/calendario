const dias = 30;
const mes = "junio";
const num_mes = 6;
let semestre = "";

if(num_mes <= 6){
    semestre = "Primer semestre";
}
else{
  semestre = "Segundo semestre";
}
console.log(mes + " tiene " + dias + " dias y pertecene al " + semestre);

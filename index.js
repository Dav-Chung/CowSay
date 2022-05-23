var cowsay = require("cowsay");
const poulet = require('./information.js')


/*document.getElementById("demo").innerHTML =
person.firstName + "is" + person.age + " years old.";*/

console.log(cowsay.say({
    text : ("je suis "+ poulet.nom+" de la Wide " + poulet.school),
    e : "^^",
    T : "U "
}));

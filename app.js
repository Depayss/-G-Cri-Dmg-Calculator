var dmg = document.getElementById(`dmg`);
var crit = document.getElementById(`crit`);
var critDmg = document.getElementById(`critDmg`);
var dmgDealt = document.getElementById(`dmgDealt`);
var n = 0;

document.getElementById(`atkBtn`).addEventListener(`click`, ()=>{

    n = Math.random();

    if (n<parseFloat((crit.value)/100)){
        dmgDealt.value = parseFloat((critDmg.value)/100) * parseFloat(dmg.value);
    } else{
        dmgDealt.value = parseFloat(dmg.value);
    }
    
})




import Math

function updateRand(){
   let web = ["chars/Anji_Mito.html", "chars/Ax1_Low.html", "chars/Baiken.html", "chars/Bridget.html", "chars/Chipp_Zanuff.html", "chars/Dizzy.html", "chars/Eddie.html", "chars/Faust.html", "chars/I-No.html", "chars/Jam_kuradoberi.html", "chars/Johnny.html", "chars/Ky_Kiske.html", "chars/May.html", "chars/Millia_Rage.html", "chars/Potemkin.html", "chars/Robo_Ky.html", "chars/Slayer.html", "chars/Sol_Badguy.html", "chars/Testament.html", "chars/Venom.html", "chars/Zappa.html"];
   range = randomRange > sites.length ? sites.length : randomRange
   index = Math.floor(Math.random() * range)
   site = web[index]
   $("#rand").attr("href", "site");
}
var openSite = function (url) {
   window.open(url)
}
let randSen = document.getElementById("rand");
randSen.on("click", updateRand)
//de prijzen van de pizza 
var kleinepizza= 6;
var mediumpizza= 8;
var grootpizza= 10; 

var klein=parseInt(prompt("hoeveel kleine pizza's wilt u ? "));//de prompt vraagt een aantal van de pizza's 
var medium=parseInt(prompt("hoeveel medium pizza's wilt u ? "));
var groot=parseInt(prompt("hoeveel groote pizza's wilt u ? "));

document.write("<br> aantal kleine pizza's = " +klein);
document.write("<br> prijs =" +kleinepizza * klein)
document.write("<br> aantal medium pizza's = " +medium);
document.write("<br> prijs =" +mediumpizza*medium)
document.write("<br> aantal groot pizza's = " +groot);
document.write("<br> prijs =" +grootpizza*groot)

var totaalklein = kleinepizza*klein;
var totaalmedium = mediumpizza*medium;
var totaalgroot = grootpizza*groot;
var totaal = totaalklein+totaalmedium+totaalgroot;
document.write("<br><br> totaal bedrag ="+ totaal);

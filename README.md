# valresultat
Try learner försöker ge sig in på javascript med en uppgift att man har en knapp som 
anropar lista från JSON som visar valresultat från från senaste åren 2018
och tidigare åren 2014 där av ett namn på ett partinamn som procent enheten som visar. 
Började med att hämta in skapa ett JSON på mockarro därefter fyller man in data. 
Sparar den till JSON fil. Nu början man skapa ett Javaskript fil. 

$(document).ready(function(){
 Funktionen är beredd att skapa/starta ett dokument

$.getJSON("../data.json",  function(result){
Anropar JSON lista från den filen som jag har sparat på mappen med att funktionen ska ett resultat, 
($.getJSON(”../data.json, function(result){ 

$.each(result, function(i, val){
Varje gång en $.each utför en funktion på result i val på JSON.

$('.tab2018').append("<tr>"+"<td>" + val.parti + "</td>" 
                + "<td>" + val.partiledare + "</td>" 
                + "<td>" + val.procent + "</td>");

Här kan jag modifiera efter det HTML elementen som ska visas då med JSON listan.  
Och det fallet så styr jag mer ut av att jag kan komma åt classen i $(’tab2018’) i HTML. 

Och så var dokumenterade slut.

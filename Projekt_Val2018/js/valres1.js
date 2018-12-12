$(document).ready(function(){
    console.log("Sidan laddas!");
    $(".logobutton").click(function(){
        console.log("Klick!!");
        $.getJSON("../data1.json",  function(result){
            console.log("active jquery",result)
            console.log("Mitt resultat",result[0].parti);
            $.each(result, function(i, val){
                $('.tab2014').append("<tr>"+"<td>" + val.parti + "</td>" 
                + "<td>" + val.partiledare + "</td>" 
                + "<td>" + val.procent + "</td>");
               // $("div").append("<p>" + tillfalligNamn.partiledare + "</p>");
                console.log("Se på du kan!!",result);
                
            });  
        });
    });
});
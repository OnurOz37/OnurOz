
$(".autor").click(function () {

    $.getJSON('/json/jsonCICLIC.json', function (data){
        data.forEach(function(objet, index){
            var autor = objet.Cibles.indexOf("AUTEUR")>-1;
            
            
                if(autor){
                        $("#liste").find($('td:not(:contains("AUTEUR"))')).remove();
                    }
                    
                    // var cibles = $('#liste .tab');
                    // if(cibles.html!=autor){
                    //     $("#liste").remove(); 
                    // }
                    
                
                    
                    
                }
            );
            
        })
    
    });

    
    

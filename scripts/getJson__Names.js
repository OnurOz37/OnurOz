$("#getdata-one").click(function () {

    var clicks = $(this).data('clicks');
    if (clicks) {
        // odd clicks
        $("#liste").find("tr:gt(0)").remove();
    } else {
        // even clicks


        $.getJSON("/json/jsonCICLIC.json", function (data) {
            data.forEach(function (objet, index) {


                if (objet.Clefs.indexOf("DEVELOPPER/FINANCER/ACCOMPAGNER") > -1) {

                    let column = $("<tr>")

                    let cell3 = $("<td>").text(objet.Name)
                    let cell4 = $("<td>").text(objet.Domaines)
                    var cell5 = $("<td>").text(objet.Cibles)
                    let cell6 = $("<td>").text(objet.Node)



                    column.append(cell3)
                    column.append(cell4)
                    column.append(cell5)
                    column.append(cell6)


                    $("#liste").append(column)
                    $("cell5").addClass("cibles"); 

                    

                }


            })
        })
    }
    $(this).data("clicks", !clicks);




})

$("#getdata-two").click(function () {

    var clicks = $(this).data('clicks');
    if (clicks) {
        // odd clicks
        $("#liste").find("tr:gt(0)").remove();

        
    } else {
        // even clicks
        $.getJSON("/json/jsonCICLIC.json", function (data) {
            data.forEach(function (objet, index) {


                if (objet.Clefs.indexOf("TRANSMETTRE/FORMER") > -1) {

                    let column = $("<tr>")

                    let cell3 = $("<td>").text(objet.Name)
                    let cell4 = $("<td>").text(objet.Domaines)
                    let cell5 = $("<td>").text(objet.Cibles)
                    let cell6 = $("<td>").text(objet.Node)



                    column.append(cell3)
                    column.append(cell4)
                    column.append(cell5)
                    column.append(cell6)


                    $("#liste").append(column)



                }


            })
        })

        
    }
    $(this).data("clicks", !clicks);




})
$("#getdata-three").click(function () {

    var clicks = $(this).data('clicks');
    if (clicks) {
        // odd clicks
        $("#liste").find("tr:gt(0)").remove();
    } else {
        // even clicks
        

        $.getJSON("/json/jsonCICLIC.json", function (data) {
            data.forEach(function (objet, index) {


                if (objet.Clefs.indexOf("ORGANISER (rencontres / s??ances / ateliers ...") > -1) {

                    let column = $("<tr>")

                    let cell3 = $("<td>").text(objet.Name)
                    let cell4 = $("<td>").text(objet.Domaines)
                    let cell5 = $("<td>").text(objet.Cibles)
                    let cell6 = $("<td>").text(objet.Node)



                    column.append(cell3)
                    column.append(cell4)
                    column.append(cell5)
                    column.append(cell6)


                    $("#liste").append(column)



                }


            })
        })
    }
    $(this).data("clicks", !clicks);




})

$("#getdata-four").click(function () {

    var clicks = $(this).data('clicks');
    if (clicks) {
        // odd clicks
        $("#liste").find("tr:gt(0)").remove();
    } else {
        // even clicks
        

        $.getJSON("/json/jsonCICLIC.json", function (data) {
            data.forEach(function (objet, index) {


                if (objet.Clefs.indexOf("DECOUVRIR (livres / textes / films / archives ...)") > -1) {

                    let column = $("<tr>")

                    let cell3 = $("<td>").text(objet.Name)
                    let cell4 = $("<td>").text(objet.Domaines)
                    let cell5 = $("<td>").text(objet.Cibles)
                    let cell6 = $("<td>").text(objet.Node)



                    column.append(cell3)
                    column.append(cell4)
                    column.append(cell5)
                    column.append(cell6)


                    $("#liste").append(column)
                    // let cell4 = $("<td>").text(objet.Domaines)
                    // let cell5 = $("<td>").text(objet.Cibles)
                    // let cell6 = $("<td>").text(objet.Node)



                
                    // column.append(cell4)
                    // column.append(cell5)
                    // column.append(cell6)


                    



                }


            })
        })
    }
    $(this).data("clicks", !clicks);




})
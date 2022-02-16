$(function () {
    function display(bool) {

        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {

        // open breathalyzer if message is open.
        var item = event.data;
        if (item.type === "open") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    });
    
    $(".apuntar-estilo").click(function () {
        $(".cuadro-animaciones-apuntar").show();
        $(".cuadro-animaciones-disparar").hide();
        $(".disparar-estilo").css({"background-color": "#000", "transition" : ".5s"})
        $(".apuntar-estilo").css({"background-color": "rgb(44,44,44)", "transition" : ".5s"})     
    });
    $(".disparar-estilo").click(function () { 
        $(".cuadro-animaciones-apuntar").hide();
        $(".cuadro-animaciones-disparar").show();
        $(".apuntar-estilo").css({"background-color": "#000", "transition" : ".5s"})
        $(".disparar-estilo").css({"background-color": "rgb(44,44,44)", "transition" : ".5s"})       
    });


    // nui call back for when each image is pressed.
    $("#DefaultAim").click(function () {
        $.post('https://Weapon-Animation-Menu-V2-reworked/1', JSON.stringify({}));
        return
    })
    $("#GangsterAim").click(function () {
        $.post('https://Weapon-Animation-Menu-V2-reworked/2', JSON.stringify({}));
        return
    })
    $("#HillBillyAim").click(function () {
        $.post('https://Weapon-Animation-Menu-V2-reworked/3', JSON.stringify({}));
        return
    })

    // second row
    $("#DefaultHolster").click(function () {
        $.post('https://Weapon-Animation-Menu-V2-reworked/4', JSON.stringify({}));
        return
    })
    $("#BackHolster").click(function () {
        $.post('https://Weapon-Animation-Menu-V2-reworked/5', JSON.stringify({}));
        return
    })
    $("#CopHolster").click(function () {
        $.post('https://Weapon-Animation-Menu-V2-reworked/6', JSON.stringify({}));
        return
    })

    // third row
    $("#FrontHolster").click(function () {
        $.post('https://Weapon-Animation-Menu-V2-reworked/7', JSON.stringify({}));
        return
    })
    $("#FrontAgressiveHolster").click(function () {
        $.post('https://Weapon-Animation-Menu-V2-reworked/8', JSON.stringify({}));
        return
    })
    $("#LegHolster").click(function () {
        $.post('https://Weapon-Animation-Menu-V2-reworked/9', JSON.stringify({}));
        return
    })


    // Close ui when ESC is pressed
    document.onkeyup = function(data) {
        if (data.which == 27) {
            $.post('https://Weapon-Animation-Menu-V2-reworked/close', JSON.stringify({}));
            return
        }
    };
});
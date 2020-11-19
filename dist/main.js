
const render = function (data){
    $("#dataContainer").empty()
    const source = $("#players-template").html();
    const template = Handlebars.compile(source);   
    for( let player of data){
        let html = template(player);
        $("#dataContainer").append(html)
    }  
}

const getTeam = function() {
    const input = $("#input").val()
    $("#input").val("")
    $.get(`/teams/${input}`, function(playersData){        
        render(playersData) 
    })
}


        // let html1 = template({name: `${player.firstName} ${player.lastName}`});
        // let html2 = template({jersey: player.jersey});
        // let html3 = template({pos: player.pos});
        // let html4 = template({pic:`https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`});
        // $("#dataContainer").append(html1);
        // $("#dataContainer").append(html2);
        // $("#dataContainer").append(html3);
        // $("#dataContainer").append(html4)


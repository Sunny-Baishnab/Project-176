let words = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "Chess"
    },
    {
        "inputs": 6,
        "category": "European Country Name",
        "word": "France"
    },

]

$(document).ready(function(){
    display()
})

function display(){
    var random_words = words[Math.floor(Math.random()*words.length)]
    $("#blanks").empty()
    
    for(var i = 0; i<random_words.inputs; i++){
        let input= `<span class = "fill_blanks" id= "input_${i}">_</span>`
        $("#blanks").append(input)
    }

    $("#hint").html(random_words.category)

    var game_over = false

    $(".clickable").click(function(){
        var correct_guess = false
        var id = $(this).attr("id")
        var life = parseInt($("#life").text())

        for (var i = 0;i<random_words.word.length;i++){
            if(random_words.word.charAt(i).toLowerCase()==id){
                if(life>0&&($(".fill_blanks").eq(i).html()=="_"||$(".fill_blanks").eq(i).html()==id)){
                    $(".fill_blanks").eq(i).html(id)
                    correct_guess  = true
                    if($("#blanks").text()===random_words.word.toLowerCase()){
                        $("#result").text("You Win")
                        correct_guess = true
                        game_over = true
                    }
                }
            }
        }
        if(life>0&&correct_guess!=true&&game_over!=true){
            life = life-1
            $("#life").text(life)
        }
        else if(life == 0){
            $("#result").text("You Lose")
        }
    })
}
class Form{
    constructor(){}
    
    display(){
      var title = createElement("h2")
      title.html("Car Racing Game!")
      var input = createInput("Name")
      var button = createButton("Play")
      var greeting = createElement("h3")

    title.position(130,10)
    input.position(130,200)
    button.position(250,250)  

    button.mousePressed(function(){
        input.hide()
        button.hide()

        var name= input.value()

        greeting.html("Hello " +name)
        greeting.position(200,200)

        playerCount = playerCount+1
        player.updateCount(playerCount)
        player.update(name)
    }
    )}
}
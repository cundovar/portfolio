$(document).ready ->
  app.init()
  
app =
  text: "Hello stranger. How are you doing?"
  index: 0
  chars: 0
  speed: 100
  container: ".text .content"
  
  init: ->
    @chars = @text.length
    @write()
    
  write: ->
    $(@container).append @text[@index]
    if @index < @chars
      @index++
      window.setTimeout ->
        app.write()
      , @speed
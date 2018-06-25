# Word Guess Game
### Cars, Cities, Food
---
Three oddly specific topics. One goal.
This somewhat unremarkable take on the classroom favorite is written in Javascript.
  
  
## To run
---
Link to ./assets/javascript/game.js in a page of your choice, then make sure these elements...

```html
<h1>Hangman: Cars, Cities, Food</h1>
<hr>
<div class="notify" id="notify">
    <div class="lose" id="lose"></div>
    <div class="win" id="win"></div>
</div>
<div class="controls">
    <h2>Mode: </h2> 
    <select name="game_mode" id="game_mode">
        <option value="cars" selected>Car Brands</option>
        <option value="cities">Major Cities</option>
        <option value="food">Food</option>
    </select>
    <br>
    <h2>Difficulty: </h2>
    <select name="game_diff" id="game_diff">
        <option value="10" selected>Easy (10)</option>
        <option value="7">Moderate (7)</option>
        <option value="4">Hard (4)</option>
        <option value="3">Harder (3)</option>
        <option value="2">Insane (2)</option>
    </select>
    <br>
    <button type="reset" id="reset">RESET</button>
</div>
<hr>
<div class="game" id="game">
    <div id="g_letters"></div>
    <br>
    <h3>Lives: </h3> <div id="g_lives"></div>
    <br>
    <h3>Guessed: </h3> <div id="g_guessed"></div>
</div>
```

# Classic Arcade Game Clone

![App view][0]

## How To Start The Game

Double-click the `ìndex.html` file, or select it and press `enter`, to start the game.

## How To Win The Game

Make the five children reach the water, without leting the bugs get them!

## How to Play

The player moves by hiting the `up`, `right`, `down` and `left` arrows, on the keyboard.

If the player gets hit by a bug, that game session ends and the player gets asked to provide his/her name, and then a new game session starts automatically.

## Score & High Score Systems

Every time a child reaches the water, the `score` counter, at the top-right corner of the screen, increases by 1.

When the game ends, the player is prompted to input his/her name into the `Name` field. The `HIGH SCORE` board is then displayed, showing the names and respective scores of the players with the highest scores within five `score marks`: 10, 20, 30, 40 and 50 points.

When the player's `score` counter reaches one of the 5 `score marks`, the name provided by the player's input will be displayed in the `HIGH SCORE` board, in the position previously occupied by the name of the player who held the best score for that `score mark` in previous game sessions.

**The names recorded in the `HiGH SCORE` board will be stored locally and loaded in future game sessions, even if the browser window is shut**.

## Rounds & Progressive Difficulty

Each time the player's `score` increases 5 consecutive points, that is, each time the 5 children reach the water without being hit by a bug, another round starts.

Each round, the speed of the bugs increases, progressively making it more difficult for the children to reach the water without being hit by a bug.

## Credits and Aknowledgements

* Jai, my mentor at Udacity, for answering all my questions and giving encouragement;
* Anil Emre, [discussion](https://knowledge.udacity.com/questions/1590?utm_medium=email&utm_campaign=ret_600_auto_ndxxx_knowledge-answer-created_na&utm_source=blueshift&utm_content=ret_600_auto_ndxxx_knowledge-answer-created_na&bsft_clkid=85e8cd88-c69c-43e9-a699-0d0fbd779277&bsft_uid=d5fb8f63-65ea-4fc9-9cb8-14de380d6739&bsft_mid=cc632ee4-24a4-4415-808f-5439b8c30a79&bsft_eid=22b8f7b6-5eac-66ee-cf9f-0d5b86b9fddc&bsft_txnid=370c5cae-fcd0-4748-9d2a-16d1d0bc549f#1601) on the _"knowledge"_ section of the Udacity online platform
* Jesse S, [discussion](https://knowledge.udacity.com/questions/2872) on the _"knowledge"_ section of the Udacity online platform
* 2D collision detection, from [MDN](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
* Code to prevent window from rolling up and down, from [ncaron](https://github.com/ncaron/frontend-nanodegree-arcade-game/blob/master/js/app.js)
* Prompt Box Code at [w3schoools.com](https://www.w3schools.com/js/js_popup.aspq)

[0]:/images/app.png
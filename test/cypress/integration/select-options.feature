Feature: Select option to play

  As a player
  I want to select an option
  So that I can play the game against the machine

  Background: Start the app
    Given game started

  Scenario Outline: Show correct option selected by player
    When player selects an option <option>
    Then the result show the player option <option-result>

    Examples:
      | option    | option-result |
      | #rock     | ROCK          |
      | #paper    | PAPER         |
      | #scissors | SCISSORS      |

  Scenario Outline: Show correct option selected by machine
    And computer select an option <computer-option>
    When player selects an option <player-option>
    Then the result show the options selected <result>

    Examples:
      | computer-option | player-option | result          |
      | rock            | #rock         | ROCK - ROCK     |
      | paper           | #rock         | ROCK - PAPER    |
      | scissors        | #rock         | ROCK - SCISSORS |

  Scenario Outline: Show result game
    When computer select an option <computer-option>
    And player selects an option <option>
    Then the result game is <result-game>

    Examples:
      | computer-option | option    | result-game |
      | rock            | #rock     | DRAW ~.~    |
      | rock            | #paper    | YOU WIN :)  |
      | rock            | #scissors | YOU LOSE :( |



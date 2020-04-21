Feature: Start new game

  As a player
  I want to reset the game
  So that I can start a new game

  Background: Start the app
    Given game started

  Scenario: Scoreboard reset to 0:0
    And the scoreboard shows 1:1
    When player clicks on -new game-
    Then the scoreboard shows 0:0

  Scenario: Result text show correct message when new game started
    And the scoreboard shows 1:1
    When player clicks on -new game-
    Then result text show "Select your choice to start the game"

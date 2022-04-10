Feature: Choose a chair
Scenario: should choose a free chair
Given user is on "/client/index.php" page
When user clicks on date 
And user clicks on time
Then the user is redirected to a chair choosing page
And the user can choose a chair
And chosen chair is selected
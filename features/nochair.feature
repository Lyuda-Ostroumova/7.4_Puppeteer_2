Feature: Booking a ticket withour=t a chair
Scenario: should not book without a chair
Given user is on "/client/index.php" page
When user clicks on date 
And user clicks on time
Then book button is disabled


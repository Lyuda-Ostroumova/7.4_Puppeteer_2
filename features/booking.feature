Feature: Booking a ticket
Scenario: should book a ticket
Given user is on "/client/index.php" page
When user clicks on date 
And user clicks on time
And user chooses a chair
And user clicks Book button
Then the user is redirected to "/client/payment.php"

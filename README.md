# password-generator// I started with defining the four character types; lowercase, uppercase, number and character. Im sure you can link these from an outside source but I just chose to define the characters in the document. 

Then I added the function generatePassword to fire once the Generate button is selected on the page. Rather than allowing the user to chose from different options by inserting text like we did in the "shop" lesson Module, I chose to direct the user through a series of prompts for what type of characters they wanted to be included in their random password. However the user can insert how many characters the password between. I had to insert an alert if they chose a number outside of 8 and 128 per the instructions. 

Once I had my prompts, I added the various situations that may play out given the users selection. I feel like this could be simpler - but at my early skill level I felt this was the only viable options I was comfortable with. 

Once I had the situations in there, I added my math function to randomize the selections. 

And the last thing that was needed was to link the random password that was generated with the text box that the user sees. I was able to do this quickly through the Console - but had some trouble figuring out how to show it in the log. Had to spend some time on YouTube annd Google in order to figure that out.
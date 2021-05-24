# Lab8_Starter
 Liu Liu and only Liu Liu. I'm too shy to ask someone to code with me :(.
## Check your understanding q's (FILL OUT)

1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
    <br>(1)Within a Github action that runs whenever code is pushed.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
     <br>No because there can be many places that produces a failure. This will not pin point the issue and is a waste of time.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
     <br>Yes, it provides precise information regarding an issue.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
    <br>I'm messing it'll run with a browser UI that we haven't build.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   <br> await page.goto('http://127.0.0.1:5500/#setting');
   <br>but we might miss a few cases, so we'll have to either click on setting early or change the way the automation runs.
 


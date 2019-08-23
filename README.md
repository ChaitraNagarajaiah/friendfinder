# friendfinder

In this activity, we'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from our users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.


Our survey  has 10 questions of our choosing. Each answer should is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

Our server.js file should require the basic npm packages  express and path.

Our htmlRoutes.js file should include two routes:
A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.

our apiRoutes.js file should contain two routes:
A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
We save your application's data inside of app/data/friends.js as an array of objects. 

Technologies Used

JavaScript

jQuery

node.js

Express.js

HTML

Bootstrap

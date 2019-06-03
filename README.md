# MEAN-Stack-RESTful-API-Tut
My attempt to follow &amp; update the 43 Step YT tutorial:  
## MEAN Stack RESTful API Tutorial Playlist  
https://www.youtube.com/playlist?list=PLX2HoWE32I8Nkzw2TqcifObuhgJZz8a0U


Software | Version in Video Tut | Ver I Installed | URL/cmd
------------ | ------------ | ------------- |  -------------
Git | 1.9.5 | 2.21.0-64-bit | https://git-scm.com/downloads
Node | 0.10.35 | 10.15.3 | https://nodejs.org
Express | 4.11.0 | 4.17.1 | npm install express
AngularJS | 1.2.28 | 1.7.8 | copy cdn from https://angularjs.org
bootstrap | 3.3.1 | 4.3.1 | copy cdn from https://getbootstrap.com/
mongoDB | 2.6.7 | 4.0.9 | https://mongodb.org
mongojs | 0.18.0 | 2.6.0 | npm install mongojs
body-parser | 1.10.1 | 1.19.0 | npm install body-parser


* Step 0: Install Git - https://git-scm.com/downloads
* Step 1: Install Node - https://nodejs.org
* Step 2: Create 'contactlistapp' folder
* Step 3: Create 'server.js' inside 'contactlistapp' folder
* Step 4: Install text editor (he used Sublime. I'm using VS Code)
* Step 5: Open CMD prompt (Git Bash)
* Step 6: Navigate to 'contactlistapp' folder
* Step 7: Install express via npm
* Step 8: require('express') ...
* Step 9: Test our server
* Step 10: Setup HTML template (part 1)
* Step 11: Create 'public' sub-folder (part 2)
* Step 12: Create index.html (part 3)
* Step 13: Edit index.html (part 4) & test our server
* Step 14: Load AngularJS in index.html
* Step 15: Use & test angularjs
* Step 16: Load bootstrap in index.html
* Step 17: Test bootstrap
* Step 18: Create general layout
* Step 19: Create controller
* Step 20: Connect controller.js file with index.html file - NOT WORKING
* Step 20b: Register the controller ( fix for Step 20 )
* Step 21: Create dummy data for testing
* Step 22: Put dummy data into table
* Step 23: Retrieve dummy data from server
* Step 23b: Actually retrieve dummy data from server - error: success is not a function
* Step 23c: Actually retrieve dummy data from server - FIXED
* Step 24: Install MongoDB
* Step 25: Run mongodb (technically mongod)
* Step 26: Add data to mongodb
* Step 27: Install mongojs
* Step 28: require('mongojs') ...
* Step 29: Get data from mongodb with a GET request
* Step 30: Prep index.html to allow inputting data
* Step 31: Define and test the addContact() function
* Step 32: Send data to the server - install body-parser
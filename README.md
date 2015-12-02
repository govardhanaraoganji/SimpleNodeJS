#Here am going to explain NodeJS application configuration, deployment & testing API[s]

# npm & NodeJS installation guide.

If you found the old node package installed, run this command to completely remove it
> sudo apt-get remove --purge node

Install Node.js with Ubuntu Package Manager
1. To install Node.js, open a terminal and type the following command:

> sudo apt-get install nodejs

2. Then install the node package manager, npm:

> sudo apt-get install npm

3. Now we should have both the node and npm commands working

> node -v
	v0.10.25
> npm -v
	1.3.10

# We can install node module[s] in two ways.
1. Permanent 

> npm install body-parser -- save

2. Temporary

> npm install body-parser


# To deploy your application
1. If application not exists. Download the application.
2. Go to the folder where app.js exists through terminal, start the npm server by uising below command.

> npm start

# Testing your application / API[s] by using POSTMAN or some other REST-Client.

Here is the some URL[s],

1. Home Page	GET	http://127.0.0.1:3000/	
2. Add Student	GET	http://127.0.0.1:3000/addStudent
3. Add Question	POST	http://127.0.0.1:3000/addQuestion

If you want, you can remove I18N configuration & fileupload & etc.

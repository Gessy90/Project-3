# General Assembly Project 3 : A MERN Stack App - Group Project

### Timeframe
7 days

## Technologies used

* HTML5
* SCSS + CSS Animation
* JavaScript (ES6)
* React
* Node.js
* Mongodb
* Yarn
* Babel
* JSON
* Webpack
* Mongoose
* Heroku
* GitHub/Git

## Installation

1. Set up a project repo by a git master
2. Clone the repo
3. Created all the back-end and front-end files
4. Set up Webpack and installed all the dependencies packages
5. Set up and run the server
6. Open the `index.html` in Google Chrome
7. Deployed on Heroku

## Our App - Hidden Gems

![hidden gems homepage](https://user-images.githubusercontent.com/42389173/52848831-9a9ca500-3107-11e9-9557-3c1fc40cc4d9.png)

You can find a hosted version here ----> https://wdi-hidden-gems-project-3.herokuapp.com

### App overview
The website is based on hidden gems in the world where users can find and add new ‘Gems’ and ‘Trips’ . 


### App Instructions
1.To start the App the user needs to register first.
![registration page](https://user-images.githubusercontent.com/42389173/52851319-b30fbe00-310d-11e9-883d-9fa2f0fd347e.png)

2.The user will login in using the correct login credentials.
![login page](https://user-images.githubusercontent.com/42389173/52851380-e0f50280-310d-11e9-8a5f-4ef41a846ac1.png)

3.After loggin in, the user can see their profile which contains the 'Gems' and 'Trips' that they have created. All the users that have are followed are also shown on the profile page.
![user page](https://user-images.githubusercontent.com/42389173/52851950-41d10a80-310f-11e9-92b0-d1637983a316.png)

4. Users can see 'Gems' from the index pages. By hovering on each 'Gem' you will discover the title and location of the 'Gem'.
![gems index](https://user-images.githubusercontent.com/39096986/54701293-9f041580-4b2c-11e9-9e83-46df7a64392c.png)

5.The 'Gem' show page displays details about the 'Gem' including location information with a map, 'Trips' associated with 'Gem' and a comments section.
![Gem Show Page](https://user-images.githubusercontent.com/42389173/55077087-d6277900-508e-11e9-87b7-e268f16707f5.png)


6. Users can discover 'Trips' from the index pages. 'Trips' can be searched for by category. Each 'Trip' card displays the 'Gems' that are included in the 'Trip' as well as the category of the 'Trip'.

![trip index](https://user-images.githubusercontent.com/39096986/54701356-c0650180-4b2c-11e9-92d7-75d2acd8a81c.png)

7. The 'Trips' show page displays information about the 'Trip' and any 'Trips' the 'Gem' is associated with. Comments can be added by users that are registered and on the platform and logged in. A map displays all the 'Gems' included in the 'Trip'.

![trip show](https://user-images.githubusercontent.com/39096986/54701651-500ab000-4b2d-11e9-96b7-e5195d9f0f4a.png)

8. Other users can be followed by navigating to their profile and selecting the 'Follow' button in the profile banner. The followed user will be displayed on the user's profile page.

![user follow](https://user-images.githubusercontent.com/39096986/54811235-1dbd9780-4c80-11e9-803f-417ad45f719e.png)


## Process
This project was delivered in a group with three other developers. We managed the project with an agile methodology with a clear timeframe for us to deliver as much of the scope as possible. To assist this process we used an Kanban Board in the form of Trello to plan and manage our task, utilising daily stand-ups to track progress and understand blockers.

To start the project wireframes were produced to capture a high level user journey and the layout of the application prior to any development taking place. This gave us a clear understanding of how each page would interact and a basic layout that we could apply consistently across the application.

The backend of the application was built using Express.js with a NoSQL MongoDB database. Models and Controllers were created for 'Gems', 'Trips' and 'User'. For both 'Gems' and 'Trips' CRUD routes were created to allow users to update 'Gems' and 'Trips' they had created. The User route included Register and Login to allow a user to create a profile to view and manage their 'Gems' or 'Trips'. User follow functionality was later added to the 'User' route.

The backend routes for 'Gem', 'Trip' and 'User' were tested using Insomnia to highlight bugs and to confirm the correct data was being returned or stored to the database.

The frontend of the application was built using React.js. I developed the 'Club' show page, user page, 'Gem' and 'Trip' Create and Edit pages. The application was styled using Bulma which was customised using Scss to add a branded style across the application. React-Select and Filestack were included in the create routes. The implementation of React-Select on the 'Trip' create form was a piece of code I was proud of. An AJAX request was made to the 'Gems' end point to obtain the latest array of created gems. The response was then mapped over to return the required parameters ('value' and 'label') for the React-Select package. This was then stored to state and accessed by the React-Select Component to display all the available 'Gems' in the React-Select dropdown.

![code snippet 1](https://user-images.githubusercontent.com/39096986/54755845-cb786a00-4bde-11e9-921d-2ec63e3dce22.png)

### Challenges
This was my first experience using Git workflows which provided some challenges at the beginning of the project. As a team we developed all features on individual branches before merging with the 'development' branch. Conflicts had to be closely managed to ensure the correct version of the code was pushed to the 'development' branch. As a team we had a rigorous process which we followed as conflicts emerged. We also reduced the potential for conflicts by proactively managing task at the beginning of the day and understanding where conflicts could occur.

### Wins

A feature that was added later in the project was to allow users to follow other users. A follow route was added to the backend application which added a 'follows' array in the 'User' schema. The below code snippit was something I was proud of. An AJAX request is made from the frontend when a user follows another user. The current user is found in the database by the ID supplied with the AJAX request. The user being followed is then pushed to the array of 'follows' stored in the 'User' record. The user is then saved to the database before being populated via the User schema and returned as part of the response to the frontend. This response is used to update state and display the user has now been followed.

![Code Snipit 2](https://user-images.githubusercontent.com/39096986/54759847-cd462b80-4be6-11e9-8430-460aec018264.png)

## Future features

Additional features that I would like to add if the project had a longer delivery timeframe include functionality where users can create a one off 'Trip' and invite other members join the 'Trip'.

On the 'Gems' index page I would like to add a map of all the 'Gems' to allow users to browser 'Gems' on a map rather than in list format.

Testing of our application was limited to the backend only and one collection. Given more time, testing would have extended to the Frontend.

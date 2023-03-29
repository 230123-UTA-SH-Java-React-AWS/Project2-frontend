# Play Stephen's Blackjack With Your Friends! 

## Description
Play blackjack with your friends and see if you can beat the dealer with this multiplayer application. Using Spring Websockets, we've allowed users to create tables that can hold up to 5 separate players each. Each round, each player and the dealer will be dealt a hand and be allowed to either hit--add cards to your hand to get as close to 21 without going over--or stand, keeping your hand without adding anything to it. After all players have either busted out--gone over 21--or chosen to stand, the dealer will take its turn. Once the dealer has either chosen to stand or busted out, the round will end, and players' hands will be compared to the dealer to determine whether they have beaten it. 

The backend of the application was built using Java and Spring to send requests to the PostgreSQL database and house the game logic. Since Spring allows websocket functionality, we used those to allow multiple players to join a game. 

The frontend was built using React. To ease the process of creating forms in React, the Formik and Yup libraries were used. Redux was used to manipulate state throughout the application, and Axios was used to send requests to the backend. JSON web tokens (JWT) was used for user authentication and to keep track of sessions.

This application is deployed as a container using Docker through Microsoft Azure, with Jenkins to help with CI/CD.

We hope to implement a way to record and keep track of scores from games as well as add other card games besides blackjack to the app in the future.

[Find the deployed application here.](http://stephens-blackjack.eastus.cloudapp.azure.com/)

### Collaborators
- [Jason Kofi](https://github.com/jkof86)
- [Jonathan Demaree](https://github.com/JonathanDemaree1)
- [Teagan Stutsman](https://github.com/TStutsman) 
- [Chudier Y Chuol](https://github.com/chudiercodes)
- [Sean Bellinger](https://github.com/sean-bellinger)
- [Jahi Citizen](https://github.com/Jahi-Citizen)
- [Connor Garcia](https://github.com/connor-eg)
- [Sheryl Hu](https://github.com/reversedentistry)
- [Andriy Lazaryev](https://github.com/ItsLaz)
- [Eugene Whitaker](https://github.com/Ewhitaker2023)

### Technologies 
- Java
- JavaScript/TypeScript
- Spring framework
    - Spring Websockets
    - StompJS
- JWT
- React 
    - Formik + Yup
    - Axios
    - Redux 
- PostgreSQL
- Microsoft Azure Cloud
- Docker 
- Jenkins

## Usage instructions
In order to play games, users must create an account. Once a user is successfully logged you, they will see a page listing all public tables and the number of players that are currently playing within them. To join a table, simply click on the name of the table in the list. The max number of players that can be in a game is 5; tables that have hit that max will still display, but users will be unable to join them. 

From this screen, users may also choose to make an entirely new table by clicking the appropriate button above the public table list. Enter the name for the table and choose whether the table will be private; if done so, it will not display on the table list, but other players can still join if given the right link. After creating the table the creator will be immediately loaded into the game and can start the game whenever they choose. 

When joining a game that already exists, players will be brought to a loading screen to avoid joining a game in the middle of a round. When the next new round begins, then they will be properly brought into the game. Players are allowed to either hit or stand during the round depending on their hands - a player can continue to hit until they choose to stand or if their hand goes over 21. Once all players have finished, the dealer will be the last to go, and once they have finished their turn, all hands are compared to the dealer's hand to see whether they have beaten them or not. That concludes a round, and then the host will be the one to start the next round. 

To disconnect from a game, there is a disconnect button for players already in the game screen. For those waiting to load into a table, they can use the button that returns them to the table page. 

## License 
This project is under MIT license. 
# Blackjack With Your Friends

## Description
Play blackjack with your friends and see if you can beat the dealer with this multiplayer application. Using Spring Websockets, we've allowed users to create tables that can hold up to 5 separate players each. Each round, each player and the dealer will be dealt a hand and be allowed to either hit--add cards to your hand to get as close to 21 without going over--or stand, keeping your hand without adding anything to it. After all players have either busted out--gone over 21--or chosen to stand, the dealer will take its turn. Once the dealer has either chosen to stand or busted out, the round will end, and players' hands will be compared to the dealer to determine whether they have beaten it. 

The backend of the application was built using Java and Spring to send requests to the PostgreSQL database and house the game logic. Since Spring allows websocket functionality, we used those to allow multiple players to join a game. 

The frontend was built using React. To ease the process of creating forms in React, the Formik and Yup libraries were used. Redux was used to manipulate state throughout the application, and Axios was used to send requests to the backend. JWT was used for user authentication and to keep track of sessions.

This application is deployed as a container using Docker through Microsoft Azure, with Jenkins to help with CI/CD.

### Collaborators 

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

## Installation instructions

## Usage instructions

## License 
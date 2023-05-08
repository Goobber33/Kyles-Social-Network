# Kyle's Social Network API 🌐🚀

A back-end API for a social network web application, where users can share their thoughts, react to friends' thoughts, and create a friend list.

## Technologies

![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)
![Express.js](https://img.shields.io/static/v1?style=for-the-badge&message=Express.js&color=000000&logo=Express&logoColor=FFFFFF&label=)
![MongoDB](https://img.shields.io/static/v1?style=for-the-badge&message=MongoDB&color=47A248&logo=MongoDB&logoColor=FFFFFF&label=)
![Mongoose](https://img.shields.io/static/v1?style=for-the-badge&message=Mongoose&color=880000&logo=Mongoose&logoColor=FFFFFF&label=)

## Table of Contents 📚

- [Features](#features-)
- [Installation](#installation-)
- [Usage](#usage-)
- [API Endpoints](#api-endpoints-)
- [- [Video](#video-🎥)](#video-)
- [License](#license-)

## Features 🎯

- Create, read, update, and delete users
- Create, read, update, and delete thoughts
- Add and remove friends from a user's friend list
- Add and remove reactions to a thought

## Installation 📦

1. Clone this repository

- git clone https://github.com/yourusername/Kyles-Social-Network-API.git

2. Navigate to the project directory

- cd Kyles-Social-Network-API

3. Install the required dependencies

- npm install

4. Start the server

- npm start


## Usage 🚀

Use an API testing tool like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to make requests to the API endpoints.

## API Endpoints 📡

- `/api/users`: Create, read, update, and delete users
- `/api/users/:userId/friends/:friendId`: Add and remove friends from a user's friend list
- `/api/thoughts`: Create, read, update, and delete thoughts
- `/api/thoughts/:thoughtId/reactions`: Add reactions to a thought
- `/api/thoughts/:thoughtId/reactions/:reactionId`: Remove reactions from a thought

## Video 🎥

https://drive.google.com/file/d/1rjlbyo-9joi5ICsoaZVANNMjzjIyoW68/view

## License 📄

This project is licensed under the [MIT License](./LICENSE).

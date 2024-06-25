# Chat App
## Introduction

This chat application offers robust features allowing users to create chat rooms and add other users to these rooms. This functionality is designed to facilitate organized and topic-specific conversations, making it ideal for both personal and professional use.
![Chat App Screenshot](./chatapp.png)

## Key Features

1. **Room Creation**: Users can create chat rooms tailored to specific topics or groups. Each room acts as a separate entity where conversations are kept distinct and organized.
2. **User Management**: Users can invite others to join their chat rooms. This is managed through a secure invite system where users can search for others by username and send invitations.
3. **Real-time Messaging**: The application leverages GraphQL Subscriptions to ensure that all messages are delivered in real-time, providing an instantaneous chat experience.

## Usage 

* Authentication: The app uses JWT for authentication. Make sure to set REFRESH_TOKEN_SECRET and ACCESS_TOKEN_SECRET in the .env file.
* Real-time Data: The app uses GraphQL Subscriptions for real-time data transfer.
* File Uploads: The app supports file uploads via GraphQL using graphql-upload.

## Technologies used :

- **NestJS**: Backend framework
- **GraphQL**: API query language
- **React**: Frontend library
- **Mantine UI**: UI components library
- **MySQL**: Database
- **Docker Compose**: Container orchestration
- **Prisma**: ORM for database access
- **JWT**: Authentication
- **GraphQL Subscriptions**: Real-time data transfer
- **graphql-upload**: Handling file uploads via GraphQL
- **graphql-gencode**: Auto-generating TypeScript types from GraphQL schema

## Technical Overview:

### Backend

The backend is built with **NestJS**, a progressive Node.js framework that provides a solid foundation for building scalable server-side applications. Here's a breakdown of the core technologies and their roles:

- **GraphQL**: Enables a flexible and efficient API for querying and mutating data.
- **Prisma**: Serves as the ORM, interfacing with the MySQL database to manage and query user and room data.
- **JWT**: Handles authentication, ensuring that only authorized users can create rooms and send/receive messages.
- **GraphQL Subscriptions**: Implements real-time communication, allowing messages to be pushed instantly to all participants in a room.

### Frontend

The frontend, built with **React** and styled using **Mantine UI**, provides a user-friendly interface for interacting with the chat application. Key components include:

- **Room Management**: Users can create, view, and manage their chat rooms. The UI supports room-specific settings and participant management.
- **Messaging Interface**: A dynamic messaging area where users can send and receive messages in real-time, with support for multimedia content.
- **User Search and Invitations**: An interface for searching users and sending room invitations, enhancing user management capabilities.

### Prerequisites

- Node.js
- Docker
- Docker Compose

## Getting Started

### Clone the Repository

#### Backend Setup
```bash
git clone https://github.com/amiraadev/chat-app-nestjs-react
cd chat-app-nestjs-react
cd backend
 ```
 create an .env file : 

 ```bash
POSTGRES_USER=your_postgres_user
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DB=your_postgres_db
DATABASE_URL=postgresql://your_postgres_user:your_postgres_password@localhost:5432/your_postgres_db
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_SECRET=your_access_token_secret
APP_URL=http://localhost:3000
IMAGE_PATH=./uploads
 ```

run the following commands :

 * Install the dependencies:
```bash
npm install
 ```

 * Install the dependencies:
```bash
npm install
 ```

 * Running the Database with Docker Compose:
```bash
docker-compose up
 ```

 * Run the database migrations:
```bash
npx prisma migrate dev
 ```

 * Run the backend server:
```bash
npm run start:dev
 ```

#### Frontend Setup

```bash
cd frontend
npm install
bpm run dev

 ```





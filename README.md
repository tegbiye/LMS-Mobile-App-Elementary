# LMS-Mobile-App-Elementary

An elementary-level Learning Management System (LMS) mobile application built with React Native and Expo. This app provides course content, quizzes, and other educational materials tailored for young learners, with a user-friendly interface to promote engagement and effective learning.

## Features

- **Course List and Details**: Display a list of available courses with detailed descriptions, thumbnails, and other information.
- **User Management**: Role-based access control, allowing users to register and log in with a default role of "user".
- **Multimedia Support**: Integrates multimedia content (e.g., images, videos) for an engaging learning experience.
- **Interactive Quizzes**: Quiz support to test learners’ understanding of course material.
- **Theming**: Supports light and dark themes for a comfortable viewing experience.

## Project Structure

- **client**: Contains the React Native Expo project files.
- **server**: The backend files to support API requests and data storage.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
git clone https://github.com/tegbiye/LMS-Mobile-App-Elementary.git
cd LMS-Mobile-App-Elementary

2. Install dependencies:

cd client
npm install

3. Configure the environment:

Update the .env file in the client folder with the server_uri pointing to your local server instance.

4. Start Expo App

npx expo start

The app will be available on Expo Dev Tools or via your local Expo app.

## Server Setup

1. Navigate to the server directory:

cd server

2. Install server dependencies:

npm install

3. Run the server

npm start

The server will start at http://localhost:8000/api/v1.

## Development

# Folder Structure

1. client: Frontend Expo project files.
   . assets: Static resources like images and icons.
   . components: Reusable React Native components.
   . screens: App screens like CourseDetailScreen.
   . index.tsx and _layout.tsx: Entry file for the client application.
2. server: Backend files to handle data and API requests.
   . server.ts: Main server entry file.


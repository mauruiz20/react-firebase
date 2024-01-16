# React + TypeScript + Vite + Firebase

## React Configuration

Install dependencies using Yarn: `yarn install`

## Firebase Configuration

1. Create a project on the [Firebase Console](https://console.firebase.google.com/).
2. Set up your web app in the project's Settings.
3. Copy the `.env.sample` file in the root directory of your project and rename it to `.env`. Open the `.env` file and replace the placeholder values with your Firebase configuration:

```dotenv
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
VITE_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
```

## Usage

Start the application in development mode: `yarn dev`

The application will run at [localhost:3000](http://localhost:3000).

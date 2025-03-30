import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaBDO5OdEl9G-5HG08dsLhvvom_V5Fy7g",
  authDomain: "trading-6b1ab.firebaseapp.com",
  projectId: "trading-6b1ab",
  storageBucket: "trading-6b1ab.firebasestorage.app",
  messagingSenderId: "532192434155",
  appId: "1:532192434155:web:c9883631d94154f4802bae",
  measurementId: "G-D600Z4S9JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
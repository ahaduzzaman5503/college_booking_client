import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC6QFBFSeHFlntScN7nsdOYbufb_9HLsTA",
  authDomain: "collage-booking.firebaseapp.com",
  projectId: "collage-booking",
  storageBucket: "collage-booking.appspot.com",
  messagingSenderId: "377356401100",
  appId: "1:377356401100:web:f0d5108a759cfc3e660569"
};

const app = initializeApp(firebaseConfig);
export default app;
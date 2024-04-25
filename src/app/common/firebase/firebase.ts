import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Messaging service
export const messaging = getMessaging(app);

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};

const getFirebaseToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
    });
    console.log("Firebase token 1: ", token);
  } catch (error: any) {
    const errorStr =
      "AbortError: Failed to execute 'subscribe' on 'PushManager': Subscription failed - no active Service Worker";
    if (error.toString() === errorStr) {
      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
      });
      console.log("Firebase token 2: ", token);
    } else {
      console.error("Token error: ", error);
      throw error;
    }
  }
};

export const requestForToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      await getFirebaseToken();
    }
  } catch (error) {
    console.log("An error occurred while getting user permission. ", error);
  }
};

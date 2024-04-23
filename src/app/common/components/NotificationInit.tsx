"use client";
import { messaging, onMessageListener } from "@/firebase/firebase";
import { getToken } from "firebase/messaging";
import React, { useEffect } from "react";

const NotificationInit = () => {
  onMessageListener()
    .then((payload) => {
      console.log("On Message Payload: ", payload);
    })
    .catch((e) => {
      console.error("On message error: ", e);
    });

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
      });

      //We can send token to server
      console.log("Token generated : ", token);
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return null;
};

export default NotificationInit;

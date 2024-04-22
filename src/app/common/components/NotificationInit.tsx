"use client";
import { messaging } from "@/firebase/firebase";
import { getToken } from "firebase/messaging";
import React, { useEffect } from "react";

const NotificationInit = () => {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BAYbeTKgzkESkYkyeBJa5roHVAxjQ6RcSGW2HyRS4wif_TvC7kbHRnFmQYREScFStIZLqXAYhzB7mkxCq77QGaw",
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

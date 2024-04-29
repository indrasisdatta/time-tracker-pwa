"use client";
import {
  onMessageListener,
  requestForToken,
} from "@/app/common/firebase/firebase";
import { isServer } from "@/utils/helper";
import { isSupported } from "firebase/messaging";
import { useEffect } from "react";

const NotificationInit = () => {
  onMessageListener()
    .then((payload) => {
      console.log("On Message Payload: ", payload);
    })
    .catch((e) => {
      console.error("On message error: ", e);
    });

  useEffect(() => {
    (async () => {
      if (!isServer) {
        const firebaseSupported = await isSupported();
        console.log("firebaseSupported", firebaseSupported);
        if (firebaseSupported) {
          // const { requestForToken } = import("@/app/common/firebase/firebase");
          await requestForToken();
        }
      }
    })();
  }, []);

  return null;
};

export default NotificationInit;

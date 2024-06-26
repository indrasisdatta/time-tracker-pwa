"use server";
import { LoggedinUser } from "@/models/User";
import { isServer } from "@/utils/helper";
import { cookies } from "next/headers";

/* Cookie timeout 7 days */
const fourDays = 4 * 24 * 60 * 60 * 1000;

/* Local storage key to store logged in user data */

export const setLoggedinUserData = async (userObj: LoggedinUser) => {
  return cookies().set(
    process.env.NEXT_PUBLIC_USER_LS_KEY!,
    JSON.stringify(userObj),
    { expires: Date.now() + fourDays }
  );
};

export const getLoggedinUserData = async () => {
  // console.log(`Reading cookie ${USER_LS_KEY}`, cookies().get(USER_LS_KEY));
  if (cookies().has(process.env.NEXT_PUBLIC_USER_LS_KEY!)) {
    try {
      return JSON.parse(
        cookies().get(process.env.NEXT_PUBLIC_USER_LS_KEY!)!.value
      );
    } catch (e) {
      return "";
    }
  }
  return "";
};
export const deleteLoggedinUserData = async () => {
  return cookies().delete(process.env.NEXT_PUBLIC_USER_LS_KEY!);
};

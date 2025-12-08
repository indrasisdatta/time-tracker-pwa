"use server";
import { LoggedinUser } from "@/models/User";
import { isServer } from "@/utils/helper";
import { cookies } from "next/headers";

/* Local storage key to store logged in user data */

export const setLoggedinUserData = async (userObj: LoggedinUser) => {
  const cookieStore = await cookies();
  return cookieStore.set(
    process.env.NEXT_PUBLIC_USER_LS_KEY!,
    JSON.stringify(userObj)
  );
};

export const getLoggedinUserData = async () => {
  const cookieStore = await cookies();
  if (cookieStore.has(process.env.NEXT_PUBLIC_USER_LS_KEY!)) {
    try {
      return JSON.parse(
        cookieStore.get(process.env.NEXT_PUBLIC_USER_LS_KEY!)!.value
      );
    } catch (e) {
      return "";
    }
  }
  return "";
};
export const deleteLoggedinUserData = async () => {
  const cookieStore = await cookies();
  return cookieStore.delete(process.env.NEXT_PUBLIC_USER_LS_KEY!);
};

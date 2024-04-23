/**
 * During build time, read Firebase env vars from .env file
 * Save these env constants as JS vars in public/swEnv.js
 * Service worker refers to swEnv.js since it can't check .env file
 */
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: [".env.local", ".env"] });

const content = `
    process.env.NEXT_PUBLIC_VAPID_KEY = '${process.env.NEXT_PUBLIC_VAPID_KEY}';
    process.env.NEXT_PUBLIC_API_KEY = '${process.env.NEXT_PUBLIC_API_KEY}';
    NEXT_PUBLIC_AUTH_DOMAIN = '${process.env.NEXT_PUBLIC_AUTH_DOMAIN}';
    NEXT_PUBLIC_PROJECT_ID = '${process.env.NEXT_PUBLIC_PROJECT_ID}';
    NEXT_PUBLIC_STORAGE_BUCKET = '${process.env.NEXT_PUBLIC_STORAGE_BUCKET}';
    NEXT_PUBLIC_MSG_SENDER_ID = '${process.env.NEXT_PUBLIC_MSG_SENDER_ID}';
    NEXT_PUBLIC_APP_ID = '${process.env.NEXT_PUBLIC_APP_ID}';
`;

fs.writeFileSync("./public/swEnv.js", content);

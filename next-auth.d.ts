// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      email: string;
      username: string;
      name: string;
      phone: string;
    };
    accessToken: string;
  }

  interface User {
    _id: string;
    email: string;
    username: string;
    name: string;
    phone: string;
    accessToken: string; 
  }
}

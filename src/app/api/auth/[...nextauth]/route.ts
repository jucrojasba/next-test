import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const res = await fetch("http://192.168.88.39:7000/auth/login", {
                    method: 'POST',
                    headers: {
                        'Content-type': 'Application/json'
                    },
                    body: JSON.stringify({
                        username: credentials?.username, 
                        password: credentials?.password
                    })
                });

                const data = await res.json();

                if (res.ok && data.access_token) {
                    return {
                        ...data.user,  
                        accessToken: data.access_token  
                    };
                } else {
                    console.log("Login fallido");
                    return null; 
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;  
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as any;  
            session.accessToken = token.accessToken as string;  
            return session;
        },
    },
});

export { handler as GET, handler as POST };

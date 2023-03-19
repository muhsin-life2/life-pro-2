import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({

  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'text' },
        phone: { label: 'Phone', type: 'text' },
        code: { label: 'Password', type: 'password' },
        isPhone: { label: 'isPhone', type: 'text' }
      },
      authorize: async (credentials) => {
        var payload = {};
        if (credentials.isPhone === "true") {
          payload = {
            phone: credentials.phone,
            code: credentials.code,
          };
        }
        else {
          payload = {
            email: credentials.email,
            code: credentials.code,
          };
        }

        const url = 'https://prodapp.lifepharmacy.com/api/auth/verify-otp'

        const res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" }
        })

        const user = await res.json()

        if (res.ok && user) {
          return user;
        }

        return null;

      }
    }),
  ],
  theme: {
    colorScheme: "dark",
  },

  callbacks: {

    // async signIn({ user, account, profile, email, credentials }) {
    //   return true
    // },

    async jwt({ token, user }) {

      // token.userRole = "regusr"
      // token = user
      // console.log(token);
      if (user) {
        token = user.data.user 
        token.token = user.data.token
      }
      return token
    },
    async session(session, token) {
       console.log(session);
      return session;
    },
  },

})
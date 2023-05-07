import NextAuth, { Profile, User, Account} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseClient';

const auth = async (req: NextApiRequest, res: NextApiResponse) =>
NextAuth(req, res, {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        const { id_token } = account;

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              queryParams: {
                access_type: 'offline',
                prompt: 'consent',
              },
            },
        });

        if (error || !data) {
          console.error('Error during Google login:', error || 'No data');
          return false;
        }

        return true;
      }

      return false;
    },
  },
});

export default auth;

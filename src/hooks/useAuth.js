import { useState } from "react";
import { supabase } from "../lib/helpers/supabaseClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "../utils/cookies";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setUser(data.user);
      cookies.setJson("supabase.auth.token", data.session.access_token);
      console.log(data, error);
      if (error) {
        throw error;
      }

      setUser(user);
      toast.success("Signed in successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signUp = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      setUser(data.session);

      if (error) {
        throw error;
      }

      setUser(data);
      toast.success("Sign up successful! Check your email for the login link.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      toast.success("Signed out successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    signIn,
    signUp,
    signOut,
  };
};

export default useAuth;

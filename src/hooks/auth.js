import { useContext } from "react";
import { supabase } from "../lib/helpers/supabaseClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const signIn = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      } else {
        toast.success("Signed in successfully!");

        setUser(data.user);
        localStorage.setItem("token", data.session.access_token);
        localStorage.setItem("expiration", data.session.expires_at);

        navigate("/account");
      }
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
    user,
    signIn,
    signUp,
    signOut,
  };
};

export default useAuth;

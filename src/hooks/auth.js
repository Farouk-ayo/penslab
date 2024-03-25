import { useContext } from "react";
import { supabase } from "../lib/helpers/supabaseClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const signIn = async ({ email, password, setLoading }) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setLoading(false);
        throw error;
      } else {
        toast.success("Signed in successfully!");
        setLoading(false);
        setUser(data.user);
        localStorage.setItem("token", data.session.access_token);
        localStorage.setItem("expiration", data.session.expires_at);

        navigate("/account");
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async ({ email, password, setLoading }) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "https://penslab.vercel.app/welcome",
        },
      });
      setUser(data.session);
      if (error) {
        setLoading(false);
        throw error;
      }
      setLoading(false);
      setUser(data);
      toast.success("Sign up successful! Check your email for the login link.");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    } finally {
      setLoading(false);
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

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/helpers/supabaseClient";
import { toast } from "react-toastify";

export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to fetch user data from Supabase and update the state
    const fetchUser = async () => {
      try {
        const { data: user, error } = await supabase.auth.getUser();
        if (error) {
          throw error;
        } else {
          setUser(user);
        }
      } catch (error) {
        // toast.error("User is not authenticated");
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import ComponentLoader from "../Component/Loading/ComponentLoader";

const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const AdminRoutes = ({ children }) => {
  const [profile, setProfile] = useState({});
  // const [loading, setLoading] = useState(true); // Initialize loading as true
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    fetch(`${apiUrl}/user/profile`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.user);
        console.log({ loading });
        // Set loading to false after fetching the profile
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Handle errors by setting loading to false
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  // Check if the user is authenticated

  // Check if the profile has loaded
  if (loading) {
    return <ComponentLoader />;
  }

  // Check if the user is an admin
  if (profile?.isAdmin && profile?.role === "admin") {
    return children;
  }

  // Redirect to login if the user is not authenticated
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;

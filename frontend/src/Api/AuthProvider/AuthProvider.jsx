import React, { createContext, useState, useEffect } from "react";

import { getProfile } from "../ApiServices/Auth";

export const AuthContext = createContext();
const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const AuthProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [profile, setProfile] = useState(null);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const [reFetch, setReFetch] = useState(false);
  // Determine whether the user is authenticated or not
  const isAuthenticated = !!profile; // Assuming a user is authenticated if a profile exists

  // Load product data
  useEffect(() => {
    fetch(`${apiUrl}/products/displayProducts`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      })
      .catch((error) => console.error(error));
  }, [reFetch]);
  //   console.log(product);
  // Load user profile
  useEffect(() => {
    setLoading(true);
    fetch(`${apiUrl}/user/profile`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.user);
        setLoading(false); // Set loading to false after fetching the profile
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Handle errors by setting loading to false
      });
  }, []);

  // const [megaBanner, setmegaBanner] = useState({});
  // console.log(banners);

  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    try {
      const res = await fetch(`${apiUrl}/banner`, {
        credentials: "include",
      });
      const data = await res.json();

      if (res.ok) {
        setBanners(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const authInfo = {
    profile,
    loading,
    setLoading,
    setReFetch,
    setProfile,
    product,
    banners,
    isAuthenticated, // Include the isAuthenticated property
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

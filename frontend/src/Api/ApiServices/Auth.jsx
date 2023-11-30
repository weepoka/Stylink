const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;

const signIn = async (userInfo) => {
  return fetch(`${apiUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(userInfo),
    credentials: "include",
  });
};

const userRegister = (userInfo, setError, toast, setSuccess, setLoading) => {
  const signUp = async () => {
    try {
      setError("");
      setSuccess("");
      setLoading(true);
      const res = await fetch(`${apiUrl}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message);
      }
      if (res.ok) {
        setSuccess(data.message);
        toast.success("user created successfully");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  signUp();
};

const logOut = () => {
  fetch(`${apiUrl}/user/logout`, {
    headers: {
      "Content-Type": "Application/json",
    },
    credentials: "include",
  })
    .then((res) => {
      if (res.ok) {
        window.open("/", "_self");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      window.open("/", "_self");
    })
    .catch((error) => console.log(error));
};

const getProfile = () => {};

const googleLogin = () => {
  window.open("http://localhost:5000/api/v1/user/google/callback", "_self");
};
const facebookLogin = () => {
  window.open("http://localhost:5000/api/v1/user/facebook/callback", "_self");
};

export { userRegister, signIn, googleLogin, facebookLogin, getProfile, logOut };

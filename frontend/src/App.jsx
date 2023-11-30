import { RouterProvider } from "react-router-dom";
import "./App.css";
import Head from "./Shared/Header/Head";
import { router } from "./Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import CreateJob from "../pages/CreateJob";
import Vyshu from "../pages/Vyshu";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/post-job", element: <CreateJob/>},
      { path: 'about-us', element:<About/> },
      { path: "/login", element: <Login /> },
      { path :"/sign-up", element:<Vyshu/>}
    ]
  }
]);

export default router;

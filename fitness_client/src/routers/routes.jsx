import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/authentication/SignUp";
import Login from "../Pages/authentication/Login";
import UserProfile from "../Pages/UserProfile/UserProfile";
import BeATrainer from "../Pages/BeATrainer/BeATrainer";
import AllTrainer from "../Pages/AllTrainer/AllTrainer";
import Dashboard from "../layouts/Dashboard";
import AllNewsLetterSubscriber from "../Pages/Dashboard/Admin/AllNewsLetterSubscriber";
import AllTrainersForAdmin from "../Pages/Dashboard/Admin/AllTrainersForAdmin";
import Error from "../Pages/error/Error";
import PrivetRoute from "./PrivetRoute";
import TrainerDetails from "../Pages/AllTrainer/TrainerDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "allTrainer",
        element: <AllTrainer></AllTrainer>
      },
      {
        path: "trainerDetails/:id",
        element: <TrainerDetails></TrainerDetails>
      },
      {
        path: "beATrainer",
        element: <PrivetRoute><BeATrainer></BeATrainer></PrivetRoute>
      }
    ]
  },




  {
    path: "dashboard",
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      {
        path: "allNewsLetterSubscriber",
        element: <AllNewsLetterSubscriber></AllNewsLetterSubscriber>
      },
      {
        path: "allTrainers",
        element: <AllTrainersForAdmin></AllTrainersForAdmin>
      }
    ]
  },





  {
    path: '/userProflie',
    element: <UserProfile></UserProfile>
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>
  },
  {
    path: "login",
    element: <Login></Login>
  }

]);
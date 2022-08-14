import { BrowserRouter, Routes, Route } from "react-router-dom";

import Finish from "../pages/Finish";
import History from "../pages/History";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Questions from "../pages/Questions";
import Register from "../pages/Register";
import Topic from "../pages/Topic";

import { AppProvider } from "../providers/AppContext";

// import PrivateRoute from "./../services/PrivateRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/signup" element={<Register/>} />

          <Route path="/home" element={ <Home/>} />
          <Route path="/topic/:id" element={<Topic/>} />

          <Route path="/questions/:id" element={<Questions/>} />
          <Route path="/finish" element={<Finish/>} />


          <Route path="/history" element={<History/>} />
          <Route path="/ranking" element={<h1>the page is being developed</h1>} />
          <Route path="/profile" element={<h1>the page is being developed</h1>} />

          <Route path="*" element={<h1>page not found</h1>} />
          
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

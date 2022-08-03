import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { AppProvider } from "../providers/AppContext";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/signup" element={<Register/>} />

          <Route path="/home" element={<h1>the page is being developed</h1>} />
          <Route path="/history" element={<h1>the page is being developed</h1>} />
          <Route path="/ranking" element={<h1>the page is being developed</h1>} />
          <Route path="/profile" element={<h1>the page is being developed</h1>} />
          
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

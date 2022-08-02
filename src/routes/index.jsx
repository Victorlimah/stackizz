import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

import { AppProvider } from "../providers/AppContext";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          {/* <Route path="/sign-up" element={<Register />} />
          <Route path="/dashboard" element={ <PrivateRoute> <Dashboard /> </PrivateRoute>} /> */}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

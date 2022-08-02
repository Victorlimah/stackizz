import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvider } from "../providers/AppContext";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<h1>Oi</h1>} />
          {/* <Route path="/sign-up" element={<Register />} />
          <Route path="/dashboard" element={ <PrivateRoute> <Dashboard /> </PrivateRoute>} /> */}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

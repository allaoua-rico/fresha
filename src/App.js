import { Landing } from "./pages";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import Staff from "./pages/Staff";
import Time from "./pages/Time";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/ui/Theme";
import Checkout from "./pages/Checkout";
import Notes from "./pages/Notes";
import ServicesList from "./components/ServicesList";
import Appointments from "./pages/Appointments";
import CancelAppointment from "./pages/CancelAppointment";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Address from "./pages/Address";
import Vouchers from "./pages/Vouchers";
import Memberships from "./pages/Memberships";
import Favorites from "./pages/Favorites";
import UserFlow from "./pages/UserFlow";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user-flow" element={<UserFlow />} />
          <Route path="/auth" element={<AuthPage />} />

          <Route path="booking" element={<Booking />}>
            <Route index element={<ServicesList />} />
            <Route path="staff" element={<Staff />} />
            <Route path="time" element={<Time />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="notes" element={<Notes />} />
            <Route path="auth" element={<Auth />} />
          </Route>
          <Route path="appointments" element={<Appointments />}>
            <Route path=":apptId">
              {/* <Route index element={<AppointmentsIndex />} /> */}
              <Route path="cancel" element={<CancelAppointment />} />
            </Route>
          </Route>
          <Route path="profile" element={<Profile />}>
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="address" element={<Address />} />
          </Route>
          <Route path="vouchers" element={<Vouchers />} />
          <Route path="memberships" element={<Memberships />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

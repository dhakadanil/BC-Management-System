import { Routes, Route } from "react-router";

import CreateMember from "./pages/CreateMember";
import Footer from "./components/Footer";
import MonthlyPayment from "./pages/MonthlyPayment";

function App() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<CreateMember />} />
          <Route path="/create-member" element={<CreateMember />} />
          <Route path="/monthly-payment" element={<MonthlyPayment />} />

        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;
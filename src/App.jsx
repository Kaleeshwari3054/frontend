// import React from 'react';
// import './App.css';
// import Hero from './Pages/Hero.jsx';
// import Video from './Pages/Video.jsx';
// import Clients from './Pages/Clients.jsx';
// import Footer from './Pages/Footer.jsx';
// function App() {
//   return (
//     <>
//       <Hero />
//       <Video />
//       <Clients/>
//       <Footer/>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./Pages/Hero.jsx";
import Video from "./Pages/Video.jsx";
import Clients from "./Pages/Clients.jsx";
import Footer from "./Pages/Footer.jsx";
import Privacy from "./Pages/Privacy.jsx";
import TermsConditions from "./Pages/Termsconditions.jsx";
import ScrollToTop from "./Pages/ScrollToTop.jsx";
import StatsSection from "./Pages/StatsSection.jsx";
// import Header from './Pages/Header.jsx';
import PaymentCard from "./Pages/PaymentCard.jsx";
import PaymentButton from "./Pages/Paymentbutton.jsx";
// import Whatsappform from "./Pages/Whatsappform.jsx";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Header /> */}
              <Hero />
              <Video />
              <Clients />
              <StatsSection />
              <PaymentCard />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        {/* <Route path="/payment" element={<PaymentButton />} /> */}
        <Route path="/paymentbutton" element={<PaymentButton />} />
        {/* <Route path="/whatsappform" element={<Whatsappform />} /> */}
      </Routes>
    </>
  );
}

export default App;

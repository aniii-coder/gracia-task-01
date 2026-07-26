// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <RootLayout>

//       <Home />
//     </RootLayout>
//   );
// }

// export default App;



import LoadDetails from './features/home/component/loan-details/LoadDetails';
import Home from './features/home/Home';
import RootLayout from './root-layout/RootLayout';
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
    <RootLayout>


      
    <Routes>
      {/* Listing */}
      <Route path="/:module/:page" element={<Home />} />
      <Route path="/:module/:page/:id" element={<LoadDetails />} />

      {/* Details */}
      {/* <Route path="/:module/:page/:id" element={<DetailsPage />} /> */}
    </Routes>
    </RootLayout>
    </>
  );
}
import React from 'react'
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import App from '../App';
import Form from '../components/Auth/Auth';
const Router=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/expenses" element={<App />} />
      
      </Routes>
    </BrowserRouter>
  );
}
export default Router
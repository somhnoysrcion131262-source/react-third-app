import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pagrs/Home.jsx";
import Hello from "./pagrs/Hello.jsx";
import Hi from "./pagrs/Hi.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/wow/wow/hi" element={<Hi />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
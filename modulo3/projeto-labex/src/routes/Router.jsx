import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx"
import AdminPage from "../pages/AdminPage.jsx"
import ErrorPage from "../pages/ErrorPage.jsx"
export default function Router(){
    return(
        <BrowserRouter>
         <Routes>
             <Route index element={<HomePage />} />
             <Route path={"/admin"} element={<AdminPage />} />
             <Route path={"*"} element={<ErrorPage />}  />
         </Routes>
        </BrowserRouter>
    )
}
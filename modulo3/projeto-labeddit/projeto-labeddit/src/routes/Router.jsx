import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/Errorpage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import SignUpPage from "../pages/SignUpPage";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/signup"} element={<SignUpPage/>}/>
                <Route path={"/post/:postId"} element={<PostDetailsPage/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
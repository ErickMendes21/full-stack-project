import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/loginPage/loginPage"
import RegisterPage from "./pages/registerPage/registerPage"
import HomePage from "./pages/homePage/homePage"
import ResetPassword from "./pages/resetPasswordPage/resetPassword"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Alterar Depois, fazer a página de música ser a página Default (Caso a pessoa não tenha login, mostrar o botão de fazer login ao invés da foto de perfil. E sem login,
        a pessoa não vai conseguir escutar múscia (Olhar spotfy para exemplo)) */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reset_password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

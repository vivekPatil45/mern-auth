import { BrowserRouter,Routes,Route } from "react-router-dom";
import { About, Home,SignIn,SignUp ,Profile } from "./pages";
import { Header } from "./components";





const App = () => {
    return (
        
        <BrowserRouter>
          <h1 className=" bg-red-500">hiii</h1>
          {/* Header */}
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
    )
}

export default App

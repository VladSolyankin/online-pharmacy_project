import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog.jsx";
import Cart from "./pages/Cart.jsx";
import Antibiotics from "./pages/Antibiotics.jsx";
import Anabolic from "./pages/Anabolic.jsx";
import Anesthetize from "./pages/Anesthetize.jsx";
import Antiviral from "./pages/Antiviral.jsx";
import Neuroleptics from "./pages/Neuroleptics.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import {createContext, useEffect, useState} from "react";

export const GroupContext = createContext()
export const PharmacyContext = createContext()

function App() {
    const [groupContext, setGroupContext] = useState(0)
    const [pharmacyContext, setPharmacyContext] = useState(0)
    const pharmacyValue = {pharmacyContext, setPharmacyContext}
    const groupValue = {groupContext, setGroupContext}

    console.log(pharmacyContext, groupContext)
    return (
        <div className="App">
            <PharmacyContext.Provider value={pharmacyValue}>
                <GroupContext.Provider value={groupValue}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<SignIn />}></Route>
                            <Route path="/sign_up" element={<SignUp />}></Route>
                            <Route path="/catalog" element={<Catalog />}></Route>
                            <Route path="/cart" element={<Cart />}></Route>
                            <Route path="/group1" element={<Antibiotics group={groupContext}/>}></Route>
                            <Route path="/group2" element={<Anabolic />}></Route>
                            <Route path="/group3" element={<Anesthetize />}></Route>
                            <Route path="/group4" element={<Antiviral />}></Route>
                            <Route path="/group5" element={<Neuroleptics />}></Route>
                        </Routes>
                    </BrowserRouter>
                </GroupContext.Provider>
            </PharmacyContext.Provider>
        </div>
    )
}

export default App

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Characters from "./component/Characters";
import Planets from "./component/Planets";
import Vehicles from "./component/Vehicles";
import { Details } from "./views/details";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/planets" element={<Planets />} />
                        <Route path="/vehicles" element={<Vehicles />} />
                        <Route path="/details/characters/:id" element={<Details category="characters" />} />
                        <Route path="/details/planets/:id" element={<Details category="planets" />} />
                        <Route path="/details/vehicles/:id" element={<Details category="vehicles" />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

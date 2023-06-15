import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Booting from "./pages/booting/booting";

function App() {
	return (
		<>
			<Router>
                <Routes>
                    <Route>
                        <Booting />

                    </Route>
                </Routes>
            </Router>
		</>
	);
}

export default App;

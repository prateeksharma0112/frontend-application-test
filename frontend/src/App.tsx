import { Routes, Route } from "react-router";

import Layout from "@/app/dashboard/page";
import Testpage from "@/app/testpage/page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Testpage />} />
            </Route>
        </Routes>
    );
}

export default App;

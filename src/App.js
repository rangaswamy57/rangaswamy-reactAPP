import React  from "react";
import ReactDOM  from "react-dom";
import HeaderComponent from "./Componets/Header";
import FooterComponent from "./Componets/Footer";
import BodyComponent from "./Componets/Body";


/**
 * HeaderComponent
 *  -Logo
 *  - Menu Iteam
 * BodyComponent
 *  -SearchBar
 *  -RestoComponent
 *    - Image
 *    - Resto Name
 *    - Rating.
 *    - Devlivery Time
 * FooterComponent
 *  - Copyrights.
 *  - Links, 
 *  Properties for components.
 */








const AppLayout = () => {
    return (
        <div className="container-fluid">
            <HeaderComponent></HeaderComponent>
            <BodyComponent></BodyComponent>
            <FooterComponent></FooterComponent>
            
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout></AppLayout>); 
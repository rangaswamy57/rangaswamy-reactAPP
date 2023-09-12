import React from "react";
import ReactDOM from "react-dom";

const h1tag = React.createElement("div",{ id :"Parent"},
React.createElement("div",{ id :"Child"},React.createElement("h1",{ id :"some"},"Hello I Am Rangaswamy i am learning React JS")),
);

        const jsxdivision = <div id="myid">Hello heaing i am from javascript and react<p id="paragraph">Rangaswamy react</p>JSX</div>

console.log(h1tag);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(h1tag);
root.render(jsxdivision);


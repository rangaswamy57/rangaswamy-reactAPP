const h1tag = React.createElement("div",{ id :"Parent"},
React.createElement("div",{ id :"Child"}),
React.createElement("h1",{ id :"some"},"Hello I Am From React JS")
);

console.log(h1tag);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(h1tag);
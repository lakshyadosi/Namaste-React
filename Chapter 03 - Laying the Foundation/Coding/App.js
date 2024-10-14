import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => render => HTML Element
const heading = React.createElement("h1", { id: "heading" }, "Hello🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// JSX: is not HTML in JS, it is a HTML-Like syntax used to create react element
const jsxheading = <h1 clasName="heading">Heading using JSX</h1>; // not a valid js
root.render(jsxheading);
console.log(jsxheading); // Object

//jsx() -. transpiled before it reaches the JS engine -> parcel --> take help from babel

// JSX ==> React.createElement ==> React Element JS object => HTML Element

// Babel => take JSX and convert into React.createElement, babel is a javascript compiler

// React Component

const HeadingComponent = () => {
  return <h1>Hello</h1>;
};

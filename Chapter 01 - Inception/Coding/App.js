/**
 * <div id="parent">
 *     <div id="child">
 *       <h1></h1>
 *      <div>
 *  </div>
 */

const subChild1 = React.createElement('h1',{}, "hello");
const subChild2 = React.createElement('h1',{}, "world");
const child = React.createElement('div', {id:"child"}, [subChild1, subChild2]);
const parent = React.createElement("div", {id:"parent"}, child );
console.log(parent)

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);  // ReactElemet --> HTML

// const heading = React.createElement("h1",{id:"heading"}, "hello world from react!");
// console.log(heading) // plain js objects
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);//take the object and converted into heading tag

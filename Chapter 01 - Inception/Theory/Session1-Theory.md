## Namaste React Course by Akshay Saini
# _Chapter 01 - Inception_

1. What is Emmet?
Ans: Emmet is a set of plug-ins for text editors that helps web developers write HTML and CSS code faster and more efficiently:

2. Difference between a Library and Framework?
Ans: 
"React is a library that helps build user interfaces, letting you control how to use it, while frameworks like Next.js provide a full structure for building web applications."

3 What is CDN? Why do we use it?
Ans: A CDN (Content Delivery Network) is a system of distributed servers that deliver web content to users based on their geographic location.
Use CDN: For simplicity and speed in small projects.
Use npm: For control, consistency, and advanced features in larger projects.

4. Why is React known as React?
Ans: React to Changes: React is named for its ability to automatically update the user interface when data changes.


5. What is crossorigin in script tag?
Ans: The crossorigin attribute in a <script> tag tells the browser how to handle requests for scripts from other websites, including whether to send cookies or not.

6. What is diference between React and ReactDOM
Ans: React is for creating components, and ReactDOM is for rendering those components into the browser.


7. What is difference between react.development.js and react.production.js files via CDN?
Ans: react.development.js: Contains extra warnings and debugging information to help developers during development. It is not optimized for performance and should not be used in production.

react.production.js: Contains a minified, optimized version of React without debugging information. It is designed for use in production to improve performance and reduce file size.

8. What is async and defer ?
Ans: <head>
  <script src="critical-library.js"></script>
  <script async src="google-analytics.js"></script>
  <script defer src="menu.js"></script>
  <script defer src="carousel.js"></script>
</head>
In this example:

critical-library.js loads immediately (maybe it's crucial for page functionality)
google-analytics.js loads asynchronously (it doesn't affect page content)
menu.js and carousel.js are deferred (they need the DOM, and order matters)

Async: order not maintained
Defer: order maintained

![Alt text](./image.png)

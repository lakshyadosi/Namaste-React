1. What is `NPM`?
   A: It is a tool used for package management.

2. What is difference between `dependencies` vs `devDependencies`?
   A: `Dependencies` should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc.
   `DevDependencies` should contain modules/packages a developer needs during development.
   such as, `parcel, webpack, vite, mocha`.
   `These packages` are `necessary only while you are developing your project`, not necessary on production.

3. What is the difference between `package.json` and `package-lock.json`?
   A: `package.json`:
   Its an configuration file for npm

B: `package-lock.json`:
Contains the exack version of the packages

4. ^ - caret and ~ - tilda ?

Ans: Real-world example:

You're using a package version 1.2.3
If you use ^1.2.3:

You might get version 1.3.0 (new features)
But you won't get 2.0.0 (big changes)

If you use ~1.2.3:

You might get version 1.2.4 (just bug fixes)
But you won't get 1.3.0 (new features)

Caret (^): Allows updates to any version that does not change the first non-zero number. For example, ^1.2.3 allows updates to versions 1.x.x but not 2.x.x.

Tilde (~): Allows updates to any version that does not change the middle number. For example, ~1.2.3 allows updates to versions 1.2.x but not 1.3.x.

The main idea:

^ : "Give me new features, but don't break my app"
~ : "Just give me bug fixes, nothing more"

5. Why should I not modify `package-lock.json`?
   A: Scenario: You're building a web app using Express.js

You start your project and install Express:
Copynpm install express
Your package.json shows: "express": "^4.17.1"
You develop your app and it works great on your machine.
A month later, your teammate clones the project and runs:
Copynpm install

Express releases a new minor version (e.g., 4.18.0) with some changes.
Your teammate's install gets this newer version due to the "^" in package.json.
Suddenly, a feature in your app doesn't work on your teammate's machine due to a small breaking change in the new Express version.
You both spend hours debugging, only to realize it's due to different Express versions.

If you had a package-lock.json:

It would have locked the exact version of Express.
Your teammate would get the exact same version you used.
The app would work identically on both machines.
You'd avoid wasting time on version-related bugs.

This example shows how package-lock.json prevents inconsistencies and saves development time, especially in team environments.

6. npx ?
   Ans: npx` is a tool that is used to execute the packages
   npx parcel index.html

7. what is type="module"

Ans: <script
      type="module" 
      src="./Chapter 02 - Igniting our App/Coding/App.js"
    ></script>

type="module" in the <script> tag tells the browser that the script is an ES module, rather than a standard script file. This allows the use of features like import/export within the script.

8. Parcel ?
   Ans: # Parcel will do below things-

- Dev Build
- Create local server
- HMR- Hot Module Replacement: parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
- Uses File Watching Algorithm - written in c++
- Caching- Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent hashing
- Code Splitting
- Differential bundling - to support older browsers
- Better Error handling
- Tree shaking -- remove unused code
- Create different build for dev and prod

### installation commands:

- Install:

```
npm install -D parcel
```

- Parcel Commands :
  - For development build:
  ```
  npx parcel index.html
  ```
  - For production build :
  ```
  npx parcel build index.html
  ```

9. What is `.parcel-cache`?

A: `.parcel-cache` is used by parcel(bundler) to reduce the building time.

10. What is `Tree Shaking`?

A: `Tree shaking` is process of removing the unwanted code that we do not use while developing the application.

11. List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.

A: `5 superpowers of Parcel`:

- `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
- `File watcher algorithm` - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
- `Minification` - Minification is the process of minimizing code and markup in your web pages and script files.
- `Image optimization`
- `Caching while development`

12. What is the `dist` folder?
    A: The `/dist` folder contains the minimized version of the source code.

13. What is `browserslist`?

A: Browserlist is a tool that lets you define target browsers for your web application or library.

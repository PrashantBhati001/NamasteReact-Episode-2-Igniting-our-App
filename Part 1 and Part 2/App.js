import React from 'react';
import ReactDOM from 'react-dom/client';

const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from react")
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)


// IMPORTANT POINTS REGARDING FILE STRUCTURE
// 1.npm does not stand for node package manager:).It is used  as package manager but not known as node package manager
// 2.package.json is a configuration for npm.It contains the info about the packages or dependencies we are using in our Project.
// 3.The difference between ~(tilde)  and ^(carot) is that carot will update to the minor changes but the tilde will update to the 
// major version.
// 4.package.lock.json contains the exact version we are using.Also it makes sure that the code we have on our local is same as 
// what it is on production.
// 5..gitignore contains the file which we dont want to upload to github like node modules as node modules can be generated again.
// But the question is  how they can be generated again.The answer lies in package.json and package-lock.json.They contain all the 
// dependencies of our project so we just need to do npm install and the node modules will be installed again.
// 6.node_modules contain all the code for the packages or dependencies we have even including  the transitive dependencies.
// 7.webpack,parcel and vite are bundlers which are used to  bundle our code ,make it clean,minify it and make it ready for production
// 8.npm will install a package but npx will execute the package
//9.So once we install the react and react-dom we dont need the scripts for react in index.html
// 10.But noe you will get an error saying that browser scripts cannot have import  and export.The reason is that javascript cannot have import
// or export so in the script tag you have to write type="module".


//POWER OF PARCEL
// >Dev Build
// >Created a Local Server
// >HMR-Hot module replacement--on saving the page reloads with the new content
// >File watching algorithm written in c++
// >Caching which is making build Faster
// >Image optimization
// >Minification
// >Bundling
// >Compress
// >Consistant hashing
// >code splitting
// >differential bundling--provides support for old  browers
// >Diagnostics
// >Tree shaking --removes the unused code 


//>The build created using the npx parcel index.html  was a dev build but to create production build you need to do 
// npx parcel build index.html


// >Do we need to push dist and .parcel-cache to github.The answer is no ,these two files can be generated again using npx parcel 
// index.html.So we will add these files in .gitignore

//Browserlist contains the info about the browser where our app should definitely run.It may or may not run on other browsers
// but the one mentioned there it will definitely work ,check package.json for more info



//Order of commands executed 
// 1.npm init   --creates package.json 
// 2.npm install -D parcel   --installing bundler--creates package-lock.json() and node_modules and installs dev dependencies
// 3.if we delete node_modules they can be generated using npm install.
// 4.igniting our app: npx parcel index.html   --created dist and .parcel-cache and also this is dev build
// 5.Installing react and react-dom.npm install react and npm install react-dom
// 6.dist contains the dev or production build and parcel-cache is used for  faster builds
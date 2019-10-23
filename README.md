# DevLink

A mobile app that provides a social layer for developers.

### To build:
The app is built in React Native.
Set up your react development environment:
* at the time of writing this the LTS version of node doesnt play well with react native
    * read more about that here if your interested: https://github.com/facebook/react-native/issues/26598
    * this should be fixed soon but for now make sure you are using node version 12.8 or below. 

* You will need Node, python2, and jdk8
* If you do not have Node installed run:
```choco install nodejs --version 12.8```
* to install python2 and jdk run:
```choco install -y python2 jdk```
* to install React Native CLI run:
```npm install -g react-native cli```

### Emulate Mobile (Android)
* You must install Android Studio to emulate an android on your computer.
* Check out: https://facebook.github.io/react-native/docs/getting-started and follow the instructions on there to download and set up Android Studio.


### Download Repo






### Workflow:
* Make sure you are on your own branch when you are making changes. 
* Do not edit the build folder! Edit the src folder!
* To test your changes, run $ npm run build
* To see which files you have changed,  
$ git status
* To save those changes to the GitHub copy of your branch,  
$ git add &lt;filename&gt;  
$ git commit -m "message"  
$ git push origin &lt;your-branch-name&gt;
* To submit your changes to be added to master, create a pull request and add Hannah and/or Mitchell as reviewers
* Make sure that you do not publicly commit your API key to this repository
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
```
$ choco install nodejs --version 12.8
```
* to install python2 and jdk run:
```
$ choco install -y python2 jdk8
```
* to install React Native CLI run:
```
$ npm install -g react-native cli
```

### Emulate Mobile (Android)
* You must install Android Studio to emulate an android on your computer.
* Check out: https://facebook.github.io/react-native/docs/getting-started and follow the instructions on there to download and set up Android Studio.
* Only follow the section on installing Android Studio. Doing the initial part may cause breaking changes.


### Download Repo
* clone:
```
$ git clone https://github.com/rubenuribe-2/devlink-ACC.git
$ cd devlink-ACC 
```
* install dependancies
```
$ npm install
```
* start development server
```
$ react-native run-android
```





### Workflow:
* Make sure you are on your own branch when you are making changes.
* To see which files you have changed,  
$ git status
* To save those changes to the GitHub copy of your branch,  
$ git add &lt;filename&gt;  
$ git commit -m "message"  
$ git push origin &lt;your-branch-name&gt;
* To submit your changes to be added to master, create a pull request and add Ruben and/or Lucas as reviewers
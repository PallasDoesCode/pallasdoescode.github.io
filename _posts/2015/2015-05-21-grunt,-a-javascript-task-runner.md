---
layout: article
title: "Grunt, a JavaScript Task Runner"
date: 2015-05-21 03:21:50
comments: true
categories: [front-end, web development]
---

###What is Grunt?

Grunt is a command line task runner, built on top of Node.js, designed for JavaScript projects. It was created as a means to automate repetitive tasks in order to make them minor. You may be thinking at this point, “Well that sounds great, but what can Grunt do for me?” A few of the common tasks that developers use Grunt for include:

1. Validation of HTML/CSS/JavaScript
2. Minification of CSS/JavaScript
3. Compiling LESS to CSS

However, it is can also do much more as well.

###How to install Grunt

Before we get started with Grunt, we first need to install a few things.

1. Since Grunt runs on top of the Node runtime, we must first install [Node.js](http://nodejs.org/) .
2. Next, we will need the Grunt cli, or command line interface, which runs Grunt and our Grunt scripts.

I’ll be using a command prompt to install Grunt cli, so let’s go ahead and open the command prompt then type the command:

```javascript
npm install –g grunt-cli
```

This tells our operating system that we want to use the Node package manager to handle our installation and that we want to install it globally on the computer. The last thing we include when using the Node package manager is the name of the package we want to install, which in this case is grunt-cli.

We are now ready to install Grunt. Once again, I will be handling the installation via a command prompt. We will use the command:

```javascript
npm install grunt –save-dev
```

This command installs grunt into whichever directory we are currently working. This allows us to have multiple instances of grunt (with their own version) installed throughout the system without causing problems with other projects.

###Working with Grunt

Now that we have Grunt installed, we can look at a generic grunt file. In your project, you will need to create a file called gruntfile.js. This file is where you will call the Grunt modules that you wish to use in your project. Before we get started creating our grunt file, we will need to install all the modules that we plan to use. Thanks to Node.js this is fairly straight forward. Once again we will open a command prompt and run the following single command, replacing <package name> with the name of the actual module you will be using.

```javascript
npm install <module name> –save-dev
```

Now that we’ve got all our modules installed, let us talk go through a basic grunt file:

```javascript
module.exports =  function (grunt)
{
     grunt.initConfig({
         pkg: grunt.file.readJSON('package.json')
     });

     grunt.loadNpmTasks('');
     grunt.registerTask('default', [‘ ‘, ‘ ‘]);
};
```

As you can see in this snippet, the grunt.initConfig function is initializes automatically. Any configuration needed for a Grunt module will need to be added to this function. All modules use predefined object names and schemas. You will need to refer to the package’s documentation in order to find out what options are available for that module.

The next line in the snippet loads the modules we are using. Unless you making a simple grunt file, you can expect to use this line many times in your file. Last, we want to register our task. When Grunt runs, it automatically searches for a task called default and executes that first. It then executes each of the tasks listed in the array shown on this line.

###A basic example of how Grunt can help you

In order to give you an idea what a grunt file might look like in its simplest form I have created the following sample grunt file.

```javascript
module.exports = function(grunt)
{
     grunt.initConfig({
         jshint: {
              // define the files to lint
              files: ['Gruntfile.js', 'js/**/*.js', 'Scripts/**/*.js'],
              // configure JSHint (documented at http://www.jshint.com/docs/)
              options: {
                   // more options here if you want to override JSHint defaults
                   globals: {
                        jQuery: true
                   }
              }
         }
     });

     grunt.loadNpmTasks('grunt-contrib-jshint');
     grunt.registerTask('default', ['jshint']);
};
```

This sample grunt file takes the elements we have already discussed and adds the JSHint module. Using the configuration we created in the files section, JSHint will check not only the Gruntfile.js, but also all JavaScript files in both the Scripts folder and the js folder to make sure that they are free of errors.

We have covered a lot of material in this post concerning GruntJS. In summary, Grunt is a command line tool built using Node.js. It is mean to aid you in your development process and simplify your life. The best way to learn more about Grunt is to install it, play with it, and have fun!

---
title: "Introducing Bower"
date: 2015-04-21 01:23:03
comments: true
categories: [front-end, web development]
---

Lately, I've been learning and familiarizing myself with the code in a project called [Bootstrap WYSIWYG](https://github.com/steveathon/bootstrap-wysiwyg). During my analysis of the code, I noticed there was an open pull request that had been there for a couple months. This pull request created by [Michael Wilson](https://github.com/chrismichaels84) broke the Bootstrap WYSIWYG project up into three main parts. The first is a core library for the WYSIWYG editor. The second is a wrapper made using the Bootstrap framework that simply styles the user interface of the examples. The last part is another wrapper similar to the first but was made using the Foundation framework. Now I'm all for a minimalist approach to coding so seeing this core library really got me interested in Michael's work. So I began going through the branches he had for made for the pull request. In order to get things running and to test it out I had to install and use a program called Bower.

Now when I say I had to install and use Bower, I don't mean I was forced to use it. At this point I had never used, but had heard good things about it from other developers. Seeing it used in this project, I took the opportunity to learn try it out. This post is will talk about what Bower is and how we can install it within our environment. At some point after I've used it for a while I may come back and write a follow up article to explain how Bower works and share my experiences while using it.

###So what is Bower?

For those of you who may not know, [Bower](http://bower.io/) is a tool that helps manage your third-party libraries within your web project. Generally when starting a project I'd have to go to the website of the library I planned to use, download the files, extract (or copy) them to my project folder, then repeat for each additional library. By using Bower I can install all the libraries I plan to use with just a few simple commands in a command prompt (or in my case a PowerShell window). This is what makes Bower attractive to developers. It can definitely speed up your setup time for a new project and even aide you with keeping your project libraries up to date.

Before we can install Bower, we need to install a couple of other tools first. The first thing we need to install is [Node.js](https://nodejs.org/). The last thing we need to install is Git; specifically, [msysgit (also called Git for Windows)](https://msysgit.github.io/), as this also installs the npm tool. When installing msysgit, when you get to the screen titled "Adjusting your PATH environment" choose the option labeled "Run Git from the Windows Command Prompt." Choosing any other option on that screen will cause Bower to not work correctly. Now that we have Node.js and msysgit installed it's time to install Bower. Go to your start menu and run a Node.js command prompt. Once that has opened run the following command:

```javascript
npm install -g bower
```

That command instructs the npm tool to install Bower globally on your machine. Finally, we still need to add Bower to our environment variables in order to get Bower working correctly. If you've never done this before, you can click on the Start menu, right click on Computer, then select properties. This will open a window with some information about your computer. On the left hand side of the window select Advanced system settings, which will open the System Properties window. At the bottom of this window, click the Environment Variables button. In the new window that opened you will see two boxes, the top contains the environment variables for your user while the bottom contains the environment variables for your system. We need to update the system variables, so scroll through that list until you find the path variable. Select the edit button and press the end key, which will take you to last text added to this variable. Here you will add the location to your npm folder. If you installed it in your C: drive then it should be located at the following location:

```text
C:\Users\username\AppData\Roaming\npm\
```

Once you've added the location to your npm folder, select the OK button on all the windows. Now you're ready to test your installation. A good way to know it's working is to test both in the command prompt and in the PowerShell window. Simply open each window then type the command "bower" without the quotes. You should get some information telling you that you use the command incorrectly. If so, then congratulations are in order as you just installed Bower.

That's it for this post, be sure to check out the [official Bower website](http://bower.io/) to get more information on Bower. If you're wanting a crash course explaining more about Bower and how to use it I also recommend the [Bower Fundamentals course on Pluralsight](http://www.pluralsight.com/courses/bower-fundamentals) made by [Joe Eames](https://twitter.com/josepheames).

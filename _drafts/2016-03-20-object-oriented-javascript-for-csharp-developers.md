---
layout: article
title: "Object Oriented JavaScript for C# Developers"
date: 2016-03-20 08:28:14
comments: true
categories: [OOP, JavaScript]
---

A few months ago, while talking to [Sayed Hashimi from Microsoft](https://twitter.com/sayedihashimi) about my future as a developer, he recommended that one of the best things I can do would be to setup a blog. In order to get started, he recommended that I check out [Miniblog](https://github.com/madskristensen/MiniBlog). It's a blogging engine developed by [Mads Kristensen](https://twitter.com/mkristensen). If you haven't heard of Miniblog it is a minimalistic blogging engine developed using ASP.NET. In order to have a WYSIYWG editor for Miniblog, Mads used the [bootstrap-wysiwyg project](https://github.com/steveathon/bootstrap-wysiwyg). Being somewhat new to the web development world, one of my goals was to learn more about WYSIWYG editors and how they work so that I might someday be able to do some freelance work building websites for companies. So I took this opportunity and started digging through the project's source code.

In the time since I began learning about the project I've fixed several bugs, updated the UI to showcase more features, updated the website documentation, and even added a working example to the website. This was only a small part of the contribution I've made to the project. Steve King, the project's maintainer shared with me one evening his plan to eventually expand the project so that it includes a plugin system. This way developers can get the core functionality from bootstrap-wysiwyg project and then get any additional features by adding only the plugins they need. Having dealt with most of the bugs of late, I knew that before we could ever add a plugin system we first needed to start unit testing make sure the project was completely stable. To do that we needed unit tests, which in turn meant that our project would need to be object oriented. So I set out to learn how to write object oriented JavaScript. Coming from a class-based languaged this was more of a challenge than I expected.

## What I've Learned So Far

If you're like me and come from a class-based language then you're probably used to having public and private methods and variables. Being a prototype based language you still have these in JavaScript, they just don't work the same way you're used to. You may be thinking "How can they be different? Public is still public right?" Well let's take a look at a few examples and see how things are different. For each example I'll start by writing the snippet in C# then will write the same snippet in JavaScript. Following the two code snippets we'll analyze them and talk about what makes them different.

  > **Note:** I'm not going to go through and explain prototype inheritance, because there are people out there who can explain it much better than I can. If you're interested in learning more about prototype inheritance here a few resources that I recommend:

1. [Prototypes in JavaScript by funfunfunction](https://youtu.be/riDVvXZ_Kb4)
2. [A Plain English Guide to JavaScript Prototypes](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)
3. [Understanding "Prototypes" in JavaScript](http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/)
4. [JavaScript Prototype in Plain Language](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)

**C#**

```csharp

    public class Animal {

        public Animal() {
        }

        public void eat() {
            // do something
        }

        public void sleep() {
            // do something
        }
    }

    Animal dog = new Animal();
    dog.eat();
    dog.sleep();
```

**JavaScript**

```js

    function Animal() {
    }

    // public method
    Animal.prototype.eat = function() {
        // do something
    };

    // public method
    Animal.prototype.sleep = function() {
        // do something
    };

    var dog = new Animal();
    dog.eat();
    dog.sleep();
```

As you can see from the C# snippet we have a class called Animal and two public methods, eat and sleep. In the JavaScript snippet we just have three functions and you may be wondering how this is the equivalent to the class we saw before. Well as I was stating before JavaScript is not a traditional class based language, it follows a prototype approach to object oriented programming. That's why you see the keyword prototype when creating these public functions. We have Animal as our class name and then we have eat and sleep are out method names. By putting eat and sleep on the prototype for the Animal class we make these methods accessible to any instance of the Animal class.

Now like everything in programming there's always more than one way to do something. So let's take a look at another way to create methods. Again we'll start with a C# snippet followed by it's JavaScript equivalent.

**C#**

```csharp

    public class Car {

        private int _mileage;

        public Car() {
        }

        private int readMileage() {
            return _mileage;
        }

        public void drive( miles ) {
            _mileage += miles;
        }
    }

    var ford = new Car();
    ford.drive();
```

**JavaScript**

```js

    function Car() {

        var _mileage = 0;

        // private method
        var readMileage = function() {
            return _mileage;
        };

        // public method
        this.drive = function( miles ) {
            _mileage += miles;
        };
    }

    var ford = new Car();
    ford.drive();
```

You probably noticed in the C# snippet we still have a public method, but we also have private method. The C# snipet is pretty self explanatory, but the JavaScript uses a few things that we have yet to talk about.

using this. for public method
readMileage not accessible from outside the constructor funciton
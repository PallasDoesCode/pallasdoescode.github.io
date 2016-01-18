---
layout: article
title: "Creating Dynamic Templates with SideWaffle"
date: 2016-01-16 01:23:03
comments: true
categories: [C#, SideWaffle]
---

Over the past few months, we (the SideWaffle development team) have developed a new feature called Dynamic Templates that will help make creating your own Visual Studio templates easier. Dynamic templates gives you the ability to take any git repository or file share and create a project or item template from its contents. I'm excited to announce that as of today you can use this feature in the latest version of [SideWaffle](http://sidewaffle.com/). Now let's get to the basics of how to use Dynamic Templates.

1. First, let's grab the latest version of SideWaffle.
2. Next, create your git repository.
3. Now it's time to get to the heart of it all, setting up your folder structure.
    Dynamic Templates use the folder structure of your repository to create the templates. As you can see in the file structure below, we have to add the item-templates and project-templates folders to the root directory of your repo. We are going to ignore the project-templates-v0 folder that I have as it is used to allow legacy templates to continue to work with newer versions of SideWaffle.

    |-- item-templates/

    |-- project-templates/

    |-- project-template-v0/


4. Add your template to the respective folder
    This step is pretty self-explanatory. If you're creating a project template, then copy your template to the project-templates folder. If you're creating an item template then it will go in the item-templates folder. Of course what you'll want to copy is the parent folder of your template. That way as your project expands you can add multiple item and project templates to the folder.

    **Note:** As a general guideline, I like to run my project (Ctrl + F5) before copying to ensure it works like it should. This simple step helps prevent unexpected results when creating the template.
5. Add the SideWaffle Project Template Files
6. Add your repo as a template source in SideWaffle
7. Test and share your new template
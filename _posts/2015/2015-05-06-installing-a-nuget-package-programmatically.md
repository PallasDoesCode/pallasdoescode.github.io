---
title: "Installing a NuGet package programmatically"
date: 2015-05-06 01:14:49
comments: true
categories: [C#, Nuget]
---

Recently, I started contributing to the open source project [SideWaffle](http://www.sidewaffle.com/). Within roughly a two month time frame I have helped develop the new autoudpate feature and also helped improve the template creation process. The latter was my most recent contribution to the project and the basis for this post.

When using SideWaffle (as of April 4th, 2015) there are eight steps that you must follow in order to create your own project template. Three of those steps only apply minor changes to your active project and are really easy to forget. They include adding a template reference to the target project, adding the TemplateBuilder NuGet package, and adding the SideWaffle Project Template files, which is an Item Template bundled with SideWaffle. In order to simplify the process, I set out to combine these three things into one simple step. Today I'll be covering how I installed the TemplateBuilder NuGet package programmatically.

When creating a Visual Studio extension, there may come a time when you prompt a user for some input and based on their input install a NuGet package. This is relatively easy to do and can be done using the function I've made below.

```csharp
using EnvDTE;
using EnvDTE80;
using Microsoft.VisualStudio.ComponentModelHost;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Shell.Interop;
using System.Runtime.InteropServices;

private bool InstallNuGetPackage(Project project, string package)
{
    bool installedPkg = true;
    var dte = Package.GetGlobalService(typeof(DTE)) as DTE;
    try
    {
        var componentModel = (IComponentModel)Package.GetGlobalService(typeof(SComponentModel));
        IVsPackageInstallerServices installerServices = componentModel.GetService();
        if (!installerServices.IsPackageInstalled(project, package))
        {
            dte.StatusBar.Text = @"Installing " + package + " NuGet package, this may take a minute...";
            var installer = componentModel.GetService();
            installer.InstallPackage(null, project, package, (System.Version)null, false);                      dte.StatusBar.Text = @"Finished installing the " + package + " NuGet package";                }
    }
    catch (Exception ex)
    {
        installedPkg = false;
        dte.StatusBar.Text = @"Unable to install the  " + package + " NuGet package";
    }
    return installedPkg;
}
```

As you can see in the function above, I used functionality available in the DTE classes, to install the package. All you need to do is pass the package name (as a string) and the project to the function and the function will do the rest for you. I've also taken the liberty of updating the Visual Studio status bar so you know when the package installation has started, been successfully installed, or failed to install. That's all there is to adding a NuGet package using C#. Now go out and install some packages!

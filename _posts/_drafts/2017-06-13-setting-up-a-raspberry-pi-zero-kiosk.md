---
title: "Setting Up A Raspberry Pi Zero W as a Kiosk"
date: 2016-06-13 09:33:00
comments: true
categories: [Raspberry Pi]
---

Every Wednesday in downtown Huntsville 70-100 people gather to learn, connect, and collaborate. This event has been happening weekly for over 2 years and is known to the community as CoWorking Night. I've been volunteering at CoWorking Night for the past year and in that time I've seen our attendance grow tremendously. In order to make it easier for attendees to see our schedule when they have arrived we have made our schedule available via http://atcwn.nld.to. We have also been putting the schedule on flash drives and having them viewable from multiple TV's on site. The management team has seen that this can sometimes be troublesome to setup. In order to circumvent the issue, we decided to set up a Raspberry Pi kiosk that will load the schedule when it's plugged into the TV. This blog post details the steps taken to set it up. 

## Items Needed
1 x Raspberry Pi Zero W
1 x 16 GB microSDHC card
1 x Case
1 x HDMI to mini HDMI cable
1 x USB to micro USB cable

## Steps to Setup the Kiosk
1. Download the [latest version of Raspbian](https://www.raspberrypi.org/downloads/raspbian/).
2. Install Raspbian to the SD card. I recommend [following the instructions](https://www.raspberrypi.org/learning/software-guide/quickstart/) on the Raspberry Pi website. About halfway down the page you will find the instructions for intalling the OS using Etcher. Etcher is a fast and easy way to install the OS to the SD card. There are versions of Etcher available to download for Windows, Mac OS X, and Linux.
3. Due to the Raspberry Pi Zero (and Raspberry Pi Zero W) only having 2 micro USB ports I opted to save time by setting up the Wi-Fi while the SD card is still in my computer. To do so simply follow steps a-c.
    a. On your machine you should see boot partition of your SD card. Open the root folder of this partion in your operationg systems Windows Explorer (finder if on a Mac) and in it create a file called wpa_supplicant.conf.
    b. In this file, enter your Wi-Fi information. Below is an example of how it would look if you were to enter the information for more than one SSID. If you only have one Wi-Fi network then only the first one is required.
        ```
        network={
            ssid="SchoolNetworkSSID"
            psk="passwordSchool"
            id_str="school"
        }

        network={
            ssid="HomeNetworkSSID"
            psk="passwordHome"
            id_str="home"
        }
        ```
    c. Save and close the file. When you boot up your Raspberry Pi it will automatically copy the file to the correct location and will connect to the network for you.
    d. 
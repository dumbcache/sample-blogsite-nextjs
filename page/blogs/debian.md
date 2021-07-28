---
title: Things I Did After Debian10 Installation
description: A small guide to resolve the errors after debian buster fresh intallation and packages that i installed which make using debain easy.
postedDate: "7 jun 2021"
cover: "/blogs/debian/debian-10-buster.jpg"
---

# Things I Did After Debian10 Installation

###### 7 jun 2021

---

A small guide to resolve the errors after debian buster fresh intallation and packages that i installed which make using debain easy. The very first and best thing to do after any linux os installation is to update the packages first. In my case

```bash
sudo apt update
sudo apt upgrade
```

dmesg outputs the messages produced by the device drivers which includes all of the most important technical details.

```bash
sudo dmesg
```

In my case there were many errors due to the absence of relavant drivers lile wifi and bluetooth etc.

## Upadating sources.list file

The file '/etc/apt/sources.list' in Debian contains the list of the 'sources' from which the packages can be obtained.

```bash
sudo nano /etc/apt/sources.list
```

add the **'contrib** **non-free'** at each end of line.

The updated file should look like this..

![sourceslist](/blogs/debian/sourceslist.png)

Then execute the following command to update.

```
sudo apt update
```

you can read more about sources.list file [here](https://wiki.debian.org/SourcesList "https://wiki.debian.org/SourcesList").

## Wifi and bluetooth

Now that the sources.list file is modified u can now able to download the drivers for wifi and bluetooth.  
You can use following command to download in one go.

```bash
sudo apt install firmware-linux-nonfree
```

(or)

individually using

```bash
sudo apt install firmware-iwlwifi
sudo apt install firmware-realtek
```

## Updating grub file

According to [docs](https://www.kernel.org/doc/html/v4.14/admin-guide/kernel-parameters.html),pci=noaer supresses the pci advanced error reporting which you see when using **dmesg** command.

Open the grub file using below command and add **pci=noaer** at the end of **GRUB_CMDLINE_LINUX_DEFAULT**. Don't modify anything other.

```code
sudo nano /etc/default/grub
```

Line will look similiar to this:  
 **GRUB_CMDLINE_LINUX_DEFAULT="quiet splash pci=noaer"**.

![sourceslist](/blogs/debian/grub.png)

Lastly update the grub file using follow command and reboot.

```bash
sudo update-grub
systemctl reboot
```

## Installing Fonts

Fonts can be installed in one of the following

-   system font directory - **/usr/share/fonts/**
-   user font directory - **~/.local/share/fonts**

I prefer user font directory.  
create fonts directory using following command

```bash
mkdir ~/.local/share/fonts
```

Download your favourite fonts and move them in to the fonts directory. For example, i have '**CascadiaCode**' font

```bash
 mv CascadiaCode.ttf ~/.local/share/fonts/CascadiaCode.ttf
```

After that you need to regenrate the font cache which can be done using following command

```bash
fc-cache -f -v
```

You can search the installed font using below command
for example

```bash
fc-list | grep "CascadiaCode"
```

## Multi-touch Gestures(Fusuma)

Fusuma is a multitouch gesture recognizer. You can read the official instructions [here](https://github.com/iberianpig/fusuma "https://github.com/iberianpig/fusuma").

```bash
sudo gpasswd -a $USER input
newgrp input
sudo apt install libinput-tools
sudo apt install ruby
sudo gem install fusuma
sudo apt-get install xdotool
sudo gem update fusuma
fusuma
mkdir -p ~/.config/fusuma
nano ~/.config/fusuma/config.yml
```

Here is the config file that i use for fusuma.  
[config.yml](https://gist.github.com/yesu4658/ff574edf3740bdef5894e5c1d0ab01da)

In order to above config file to work you need to install [fusuma-plugin-keypress](https://github.com/iberianpig/fusuma-plugin-keypress) and [fusuma-plugin-wmctrl](https://github.com/iberianpig/fusuma-plugin-wmctrl).

```bash
sudo apt install wmctrl -y
sudo gem install fusuma-plugin-wmctrl
sudo gem install fusuma-plugin-keypress
```

If your are using KDE Plasma like me and want fusuma to run automatically then we need to create a bash script.filename can be anything.

fusuma_autostart . sh

```bash
#!/bin/bash

/usr/local/bin/fusuma -d

```

move the file to plasma-workspace folder

```
mv fusuma_autostart.sh /home/yesu/.config/plasma-workspace/env/
```

## Other Packages

1. ### VScode

You can download vscode from [here](https://code.visualstudio.com/docs/setup/linux).Then run

```bash
sudo apt install ./<file>.deb
```

replace \<file> with downloaded filename.

after installing vscode install [libdbusmenu-glib](https://packages.debian.org/sid/libdbusmenu-glib4) since vscode uses DBus to pass the menu to plasma.

```bash
sudo apt install libdbusmenu-glib4
```

2. ### Google chrome

Firefox browser comes buitin with the debian installation. If you prefer google chrome instead you can download it by manually [here](https://www.google.com/chrome/ "google chrome") or by terminal using following command.you can use 'wget' or 'curl'

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

both ways require you to run following command to install

```bash
sudo apt install ./google-chrome-stable_current_amd64.deb
```

3. ### Rhythmbox

Rhythmbox is one of the best audio players available for the Linux desktop

```bash
sudo apt install rhythmbox
```

4. ### VLC media player

[vlc](https://www.videolan.org/vlc/download-debian.html "vlc") is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.

```bash
sudo add-apt-repository ppa:videolan/stable-daily
sudo apt-get update
sudo apt-get install vlc
```

5. ### Qbittorrent

[qBittorrent](https://www.qbittorrent.org/) is a cross-platform free and open-source BitTorrent client.

```bash
sudo apt install qbittorrent
```

6. ### Redshift Plasmoid

[Redshift](https://github.com/simgunz/redshift-plasmoid) adjusts the color temperature of the screen trying to match that of the ambient light.It helps your eyes not to get strained, and try to minimize the negative effects of exposure to bright light during the night.

you can check if package is available using apt or apt-cache.

```bash
sudo apt search plasma-applet-redshift-control
sudo apt install plasma-applet-redshift-control
```

After install, reboot or run following command manually to start using the redshift plasmoid.

```bash
redshiftautostart
```

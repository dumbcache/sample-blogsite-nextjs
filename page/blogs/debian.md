---
title: Debian
description: A very simple way to add structured data to a page.
cover: "/cover.jpg"
---

sudo apt update  
sudp apt upgrade

sudo gedit /etc/apt/sources.list  
 :add the **contrib non-free** at each end of lin

sudo gedit /etc/default/grub  
 :add **pci=noaer** at the end of GRUB_CMDLINE_LINUX_DEFAULT.  
 Line will be like this:  
 **GRUB_CMDLINE_LINUX_DEFAULT="quiet splash pci=noaer**  
sudo update-grub  
systemctl reboot

sudo dmesg

sudo apt install firmware-linux-nonfree  
optional:  
 sudo apt install firmware-iwlwifi  
 sudo apt install firmware-realtek

sudo apt install pciutils  
sudo apt install lshw

sudo apt install gedit  
sudo apt install wget  
sudo apt install curl

sudo appt install neofetch

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb  
sudo apt install ./google-chrome-stable_current_amd64.deb

sudo apt search rhythmbox  
sudo apt install rhythmbox

sudo apt search qbittorrent  
sudo apt install qbittorrent

sudo apt install snapd  
sudo systemctl enable snapd.service  
sudo systemctl start snapd.service  
sudo snap install core  
sudo snap list  
verify:  
 sudo snap install hello-world  
 hello-world

sudo snap install vlc  
 (or)  
sudo add-apt-repository ppa:videolan/stable-daily  
sudo apt-get update  
sudo apt-get install vlc

**fonts**  
mkdir ~/.local/share/fonts  
fc-cache -f -v  
fc-list | grep "fontname"

**checking desktop session**  
ls /usr/share/xsessions/\*.desktop

**vscode**  
after installing vscode install **libdbusmenu-glib** since vscode uses DBus to pass the menu to plasma  
sudo apt install libdbusmenu-glib4

**night light**  
sudo apt-cache search redshift-plasmoid  
sudo apt search plasma-applet-redshift-control  
sudo apt install plasma-applet-redshift-control

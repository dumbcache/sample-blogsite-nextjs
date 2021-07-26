---
title: Blog1
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

---
layout: single
title:  "Store dotfiles in git."
date:  2021-08-21 15:08:53 
categories: draft
tags: dotfiles git 
---

The technique consists in storing a Git bare repository in a "side" folder (like $HOME/.cfg or $HOME/.myconfig) using a specially crafted alias so that commands are run against that repository and not the usual .git local folder, which would interfere with any other Git repositories around.

No extra tooling, no symlinks, files are tracked on a version control system, you can use different branches for different computers, you can replicate you configuration easily on new installation.

## Starting from Scratch

Create a "bare" git repository:
The first line creates a folder ~/.dotfiles which is a Git bare repository that will track our files.

{% highlight bash %}
cd ~
git init --bare .dotfiles
{% endhighlight %}

Then we create an alias config which we will use instead of the regular git when we want to interact with our configuration repository.
We set a flag - local to the repository - to hide files we are not explicitly tracking yet. This is so that when you type config status and other commands later, files you are not interested in tracking will not show up as untracked.

{% highlight bash %}
alias config='/usr/bin/git --git-dir=$HOME/.myconf/ --work-tree=$HOME'
config config status.showUntrackedFiles no
{% endhighlight %}

add the alias definition by hand to your .bashrc

{% highlight bash %}
echo "alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'" >> $HOME/.bashrc
{% endhighlight %}


any file within the home folder can be versioned with normal commands like:
After you've executed the setup any file within the $HOME folder can be versioned with normal commands, replacing git with your newly created config alias, like:

{% highlight bash %}
config status
config add .vimrc
config commit -m "Add vimrc"
config add .bashrc
config commit -m "Add bashrc"
config push
{% endhighlight %}

## Install on new system

Make sure the alias is added 

any file within the home folder can be versioned with normal commands like:



you can replicate your home directory on a new machine using the following command
For posterity, note that this will fail if your home directory isn't empty. To get around that, clone the repo's working directory into a temporary directory first and then delete that directory,

{% highlight bash %}
    git clone --separate-git-dir=$HOME/.myconf /path/to/repo $HOME/myconf-tmp
    cp ~/myconf-tmp/.gitmodules ~  # If you use Git submodules
    rm -r ~/myconf-tmp/
    alias config='/usr/bin/git --git-dir=$HOME/.myconf/ --work-tree=$HOME'
{% endhighlight %}


https://askubuntu.com/questions/1316229/is-it-bad-practice-to-git-init-in-the-home-directory-to-keep-track-of-dot-files
https://www.atlassian.com/git/tutorials/dotfiles
https://news.ycombinator.com/item?id=11071754





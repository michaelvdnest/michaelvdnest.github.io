---
layout: single
title:  "Python Virtual Environments"
date:  "2021-04-06 16:15:21"
categories: python
tags: python
---

I'm using virtualenvwrapper to help manage my virtual environments in python.

The main reasons I'm using virtualenvwrapper is because of the following features:

  1. Organize all of your virtual environments in one place.
  2. Has wrappers for managing your virtual environments (create, delete, copy).
  3. Use a single command to switch between environments.

## Installation

Run the following commands to install and initialize virtualenvwrapper.

```bash 
pip install virtualenvwrapper
export WORKON_HOME=~/.virtualenvs
mkdir -p $WORKON_HOME
source /usr/local/bin/virtualenvwrapper.sh
```

Add the following to your `.bashrc`.

```bash 
export WORKON_HOME=$HOME/.virtualenvs
source /usr/local/bin/virtualenvwrapper.sh
```

## Basic Commands

### virtualenvwrapper

Print a list of commands and their descriptions as basic help output.

Syntax:

```bash
virtualenvwrapper
```

### mkvirtualenv 

Create a new environment, in the WORKON_HOME.

Syntax:

```bash
mkvirtualenv [-a project_path] [-i package] [-r requirements_file] [virtualenv options] ENVNAME
```

### workon

List or change working virtual environments.

Syntax:

```bash
workon [environment_name]
```

### deactivate

Switch from a virtual environment to the system-installed version of Python.

```bash
deactivate
```

## Other Commands

### Create requirements.txt

Navigate to virtual directory and output installed packages in requirements format.

```bash
cd $VIRTUAL_ENV
pip freeze > requirements.txt
```

## See also

https://virtualenvwrapper.readthedocs.io/en/latest/index.html
---
layout: post
title:  "Anaconda 与 Jupyter Notebooks [课程] <br>Anaconda and Jupyter Notebooks [Course]"
author: Yuexi Tan
date:   2017-09-12 19:00:00 +1000
tags:  Note
---

Udacity course link: <https://classroom.udacity.com/courses/ud1111>

## Anaconda

### Install

Download: <https://www.continuum.io/downloads>

### Managing Packages

To install a package, type `conda install package_name`, `conda install numpy scipy pandas`, `conda install numpy=1.10` etc. Conda also automatically installs dependencies for you.

To uninstall, use `conda remove package_name`. To update a package, `conda update package_name`. To update all packages in an environment, `conda update --all`. To list installed packages, `conda list`.

If you don't know the exact name of the package you're looking for, you can try searching with `conda search search_term`.

### Managing Environments

To create an environment, use `conda create -n env_name list_of_packages`. Here `-n env_name` sets the name of your environment (`-n` for name) and `list_of_packages` is the list of packages you want installed in the environment. To create an environment with a specific Python version, do something like `conda create -n py3 python=3` or `conda create -n py2 python=2`.

### Entering an Environment

Once you have an environment created, use `source activate my_env` to enter it on OSX/Linux. On Windows, use `activate my_env`. To leave the environment, type `source deactivate` (on OSX/Linux). On Windows, use `deactivate`.

### Saving and Loading Environments

 You can save the packages to a YAML file with `conda env export > environment.yaml`. To create an environment from an environment file use `conda env create -f environment.yaml`. This will create a new environment with the same name listed in environment.yaml.

### Listing Environments

If you forget what your environments are named (happens to me sometimes), use `conda env list` to list out all the environments you've created. You should see a list of environments, there will be an asterisk next to the environment you're currently in. The default environment, the environment used when you aren't in one, is called `root`.

### Removing Environments

`conda env remove -n env_name` will remove the specified environment (here, named env_name).

## Jupyter Notebooks

### Installing Jupyter Notebook

To install Jupyter notebooks in a conda environment, use `conda install jupyter notebook`.

Jupyter notebooks are also available through pip with `pip install jupyter notebook`.

### Launching the Notebook Server

To start a notebook server, enter `jupyter notebook` in your terminal or console. This will start the server in the directory you ran the command in. That means any notebook files will be saved in that directory. Typically you'd want to start the server in the directory where your notebooks live. However, you can navigate through your file system to where the notebooks are.

By default, the notebook server runs at <http://localhost:8888>. If you aren't familiar with this, `localhost` means your computer and `8888` is the port the server is communicating on. As long as the server is still running, you can always come back to it by going to <http://localhost:8888> in your browser.

If you start another server, it'll try to use port `8888`, but since it is occupied, the new server will run on port `8889`. Then, you'd connect to it at <http://localhost:8889>. Every additional notebook server will increment the port number like this.

You should consider installing Notebook Conda to help manage your environments. Run the following command: `conda install nb_conda`.

### Magic Keywords

Magic keywords are special commands you can run in cells that let you control the notebook itself or perform system calls such as changing directories. For example, you can set up matplotlib to work interactively in the notebook with `%matplotlib`.

Use `%config InlineBackend.figure_format = 'retina'` after `%matplotlib inline` to render higher resolution images.

With the Python kernel, you can turn on the interactive debugger using the magic command `%pdb`. When you cause an error, you'll be able to inspect the variables in the current namespace.

### Converting Notebooks

Since notebooks are JSON, it is simple to convert them to other formats. Jupyter comes with a utility called nbconvert for converting to HTML, Markdown, slideshows, etc.

For example, to convert a notebook to an HTML file, in your terminal use

```
jupyter nbconvert --to html notebook.ipynb
```

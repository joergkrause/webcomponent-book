## Getting Started from Scratch

This sections requires that you have Node.js running with at least version 12 (current LTS).

### A Minimal Setup

Typically, you start in an empty folder with a couple of commands.

~~~sh
$ npm init -y
$ tsc --init
$ npm i typescript -D
$ npm i @nyaf/lib -D
~~~

The type definitions required for TypeScript are part of the packages and no additional type libraries are required. Execute the commands on a shell or from the integrated terminal of your favorite editor or IDE. Such as simple setup contains:

* A *package.json* and a *tsconfig.json* (created with the first two commands as shown above)
* A *src* folder you add from your editor's UI, containing at least these files:
    * *index.html*
    * *main.ts*
    * *main.component.tsx*

That's it, let the TypeScript compiler create the output and copy static files using `cp`. Of course, the files must be filled with some code, that makes the whole application working. That's explained further down. The section *The First Component* shows the relevant content of these files.

### The Command Line Interface

**@nyaf** comes with a simple CLI that creates boilerplate projects. These project are a little bit more complex than the basic starter code, but handle the most crucial parts very well. Use it like this (*first line for the very first time only*):

~~~sh
$ npm i @nyaf/cli -g
$ npx nyaf n
~~~

Also a quicker method of downloading and executing immediately is available:

~~~sh
npx -p @nyaf/cli nyaf n
~~~

> If you have already installed *@nyaf/lib* then the installer has placed *@nyaf/cli* automatically in the global **npm** folder.

The second of the above commands executes the CLI. The procedure is interactive as shown in Figure A-2:

![Figure A-2: The command line interface](assets/cli_part_1.gif)

> **Pro Tip!** Press Ctrl-C (^C) to exit the CLI at any time.

#### Commands

There are currently just a few commands:

* 'n' creates a new project in a new folder that has the same name as the folder. The CLI will always use lowercase letters.
* 'x' creates a new projects with the given name in the current folder regardless the folder name.
* 'c' creates a new component in a project already designed to use @nyaf.

#### Templates

The CLI provides four templates:

* **basic**: Simplest possible project
* **full**: Project with few pages
* **router**: Same as full with SPA support
* **store**: Same as basic with simple global and local store setup

All templates can either support CSS directly or integrate a SASS transpiler.

All templates come with WebPack support and the latest TypeScript compiler.


---
title: JS Massive code reuse - part 1
subtitle: Massive workspaces
description: Reuse massive amounts of code in all your projects
dateCreated: 2020-08-22
dateUpdated: 2020-08-22
language: js
author:
    firstname: Asten
    lastname: Mies
    twitter: astenmies
social:
    image: /static/media/js-massive-code-reuse-twitter.png
tags:
    - javascript
    - modules
    - developers
---

![JS Massive Code Reuse](/static/media/js-massive-code-reuse-cover.png)

This **Code reuse** series is composed of seven small posts:

1. **Massive workspaces**
2. **Massive git submodules (coming soon)**
3. **Massive publishing to npm and github (coming soon)**
4. **Massive secrets management (coming soon)**
5. **Massive modularization of your code (coming soon)**
6. **Massive bundling with rollup (coming soon)**
7. **Massively scaling it up (coming soon)**

They all reveal a **very simple** workflow that I sharpened up for the last 4 years. It enables to manage highly reusable code we have been writing for international institutions but for small presentational websites as well. This series was written for developers who already know the basics of JS. 

I made this series as simple as possible, cutting it down to the bare minimum and removing all extraneous complexity, so yeah we end up with pretty easy stuff don't be surprised!

### Why so massive?

Of course it's **massive** to be catchy, but also because in my experience it can handle a lot of code without flaws.

### What we will avoid

- Setup webpack aliases
- Starting from zero for each project
- Manually edit stuff inside `node_modules`
- Switch libraries/frameworks in desperation for maintainability and time saving
- Spend hours debugging stuff caused by symlinks and inconsistent local packages dependencies

## Motivation

How do we usually stay motivated as developers? We try something new (aka. the cool new JS gadget)!
I believe there are better ways to stay motivated. But more importantly, there are simple ways to save time and stay motivated using the same libraries/frameworks for years.

In my opinon, libraries/frameworks are just tools to get the job done. Changing these tools too often is like nailing jello to a tree. You better keep them forever and sharpen them up! Here is the workflow that works for me, I hope it works for you too.

## Workspaces

A pretty amazing feature I stumbled upon a couple of years ago is Yarn Workspaces. Don't run away when I say `yarn` (it boomed then everyone went back to npm at some point), what follows is **not supported at all in npm**.

These workspaces will enable you to easily create and manage hundreds of local packages than can be reused across all your projects. Basically you'll be able to easily "convert" everything to packages, eventually publish them to github or npm, and install them anywhere.

Here is our future project hierarchy:

```js
// Our top level parent directory
federator
.
│    // Workspace of our first app
├── app-alpha
│   └── package.json
│
│   // Workspace of packages to be consumed by the client
├── packs-client
│   └── package.json
│
│   // Workspace of packages to be consumed by the server
├── packs-server
│   └── package.json
│
│   // Contains the definition of our workspaces
└── package.json
```

By workspace, I mean the directory that is treated as a workspace by yarn (more explanation below).

### Install yarn

Please follow the [official instructions to install yarn](https://classic.yarnpkg.com/en/docs/install) or specific instructions to use it with `nvm` (you should install it without including `node` then).

### Configure workspaces

In **federator/package.json**

Create a `workspaces` object that defines which of the child directories are workspaces to be handled by yarn.

```json
{
	"name": "federator",
	"description": "Manages (almost) all codes of the company 😎",
	"version": "0.0.1",
	"license": "MIT",
	"private": true,
	"workspaces": {
		"packages": [
			"app-*",
			"packs-*"
		],
		"nohoist": []
	},
	"dependencies": {},
	"devDependencies": {}
}
```

In **packs-server/package.json**

```json
{
	"name": "packs-server",
	"version": "0.0.1",
	"license": "MIT",
	"dependencies": {
		"lodash": "4.17.20"
	}
}
```

In **packs-client/package.json**

```json
{
	"name": "packs-client",
	"version": "0.0.1",
	"license": "MIT",
	"dependencies": {
		"lodash": "4.17.20"
	}
}
```

In **app-alpha/package.json**

```json
{
	"name": "app-alpha",
	"version": "0.0.1",
	"license": "MIT",
	"dependencies": {
		"lodash": "4.17.20"
	}
}
```

### Install dependencies

Now that all our packages were created, open the terminal, and run the following command in `federator/`:

```sh
yarn
```

You will notice that the following workspaces have no `node_modules`!

- `app-alpha/`
- `packs-client/`
- `packs-server/`

That's absolutely normal. The common dependencies (only `lodash` for now), have been installed higher in the hierarchy, in `federator/node_modules/`. This is called [hoisting](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/).

### **Yes, our workspaces are already fully setup and working! 🎉**

[Follow me on Twitter](https://twitter.com/astenmies) to be kept updated when **Part 2 - Massive git submodules** comes out. That would also help to get me started because I'm new to Twitter.


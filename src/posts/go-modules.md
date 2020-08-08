---
title: Go modules
description: Full recap on Go modules.
dateCreated: 2020-07-29
dateUpdated: 2020-08-08
language: go
author:
    firstname: Asten
    lastname: Mies
    twitter: astenmies
social:
    image: /static/media/modules.jpg
---

## Init

### Generate go.mod

Initialize the modules, and name the module for compatibility with older tools that do not support go modules.

```sh
cd repo
go mod init github.com/username/repo
```

### Generate go.sum

Add dependencies to our project.

```sh
go get github.com/julienschmidt/httprouter
go get go.uber.org/zap
```

Now, go.sum was generated automatically.

### Explore go.mod

Now our go.mod looks like this.

- `module` the name of our module
- `require` the list of dependencies
- `// indirect` indicates we're not using these dependencies in our project

```go
module github.com/mies-co/go-modules

go 1.14

require (
	github.com/julienschmidt/httprouter v1.3.0
	go.uber.org/zap v1.15.0
)

```
On the other hand, go.sum now contains lots of dependencies. Dependencies needed by our dependencies.

## Use the modules

Create main.go

```go
package main

import (
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"go.uber.org/zap"
)

func main() {
	router := httprouter.New()
	router.GET("/", Index)
	log.Fatal(http.ListenAndServe(":8080", router))
}

// Index logs some messages
func Index(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	logger, _ := zap.NewProduction()
	logger.Info("successfully performed http request")
}
```

Now send a request to localhost:8080.

```sh
curl localhost:8080
```
You will now see a log

> {
  "level": "info",
  "ts": 1596877975.6699991,
  "caller": "go-modules/main.go:20",
  "msg": "successfully performed http request"
}

## Tidy

The `tidy` command affects go.mod, by:

- Removing unused dependencies
- Adding missing dependencies
- Removing comments

```sh
go mod tidy
```

## Get

If you have a go.mod file in your project, `go get` will automatically add the dependency to your go.mod.

You can get a module in different ways:

**Get:** 

Follows semantic import versioning. This will get the latest stable.

```sh
go get github.com/username/repo
```

**Get a specific go module by version:** 

```sh
go get github.com/username/repo@v1.2
```

**Get a specific go module by git commit hash:**

Enables to get a "pseudo-version" by specifing the hash of a git commit.

```sh
go get github.com/username/repo@86f663142f6de70c798bae40660f7d8726e27abc
```

## Semantic import versioning in Go

More information about [Go semantic versioning](https://golang.org/ref/mod#versions).

**v0 - Unstable:**

```sh
go get github.com/username/repo@v0.0.1
```

**v1 - Stable minor:**

You may specify `@v1.0.0` if necessary, or get the latest like this:

```sh
go get github.com/username/repo
```

**v2+ - Stable major:**

All versions above 1 are considered major versions and need to be downloaded differently.

```sh
go get github.com/username/repo/v2
```

Inside your go code, you will have to use that path as well.

```go
package main

import (
    repoV2 "github.com/username/repo/v2"
)
```

## Get all dependencies that are not yet on your machine

After a fresh `git clone`, you usually don't have all the necessary dependencies of a project. Any of the following commands will get them all for you:

```sh
go get ./...
# or
go build
# or
go build
# or
go test
```

It works wether you use go modules or not.

## Clean the download cache

To remove all packages from our local machine:

```sh
go clean -cache -modcache -i -r
```

More information about the [Go clean command and flags](https://godoc.org/cmd/go#hdr-Remove_object_files_and_cached_files)

## List all versions of a module

```sh
go list -m -versions github.com/username/repo
```

You cannot run this if you already have a vendor directory. So just delete the vendor directory `rm -rf vendor`.

## Get all dependencies defined in go.mod

The following command will get all the dependencies listed in your go.mod file, without consulting the source code to identify used/unused dependencies.

```sh
go mod download
```

## Downloads directory

By default, all downloaded modules will be here:

```sh
ls $GOPATH/pkg/mod
```

It's the same structure as the src directory, and there's also a cache directory.

## Vendor directory

In order to generate a vendor directory of all the dependencies compatible with all the versions of Go with/without support of go modules, just run:

```sh
go mod vendor
```

Now we have a vendor directory.

## Proxy

What is a Go proxy?

```sh
go env | grep "GOPROXY"
# outputs: GOPROXY="https://proxy.golang.org,direct"
```

That proxy will first be used to get a module, if it does not find it there, it will use the network and use direct. Let's say github is down, the GOPROXY is able to still serve the package.

An additional feature is GOSUMDB, which will verify the checksum to ensure that we downloaded what we intended to, and not a malicious package.

```sh
go env | grep "GOSUMDB"
# outputs: GOSUMDB="sum.golang.org"
```

## Migrate Dep to Mod

To migrate an existing project that uses the the go dep package manager, to go mod:

```sh
go mod init github.com/username/repo
```

It copies from Gopkg.toml and Gopkg.lock to go.mod.
Done, now you can delete your Gopkg files.

However, there might be are some unnecessary dependencies in go.mod. To clean them up, let's run

```sh
go mod tidy
```

## Sources

This article is a written shorter version of a tutorial made by Steve Hook - [EVERYTHING You SHOULD know about Go Modules](https://youtu.be/Z1VhG7cf83M).
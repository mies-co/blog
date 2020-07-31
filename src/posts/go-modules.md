---
title: Go modules
description: Introduction to go modules.
updatedAt: 2020-07-29
date: 2020-07-29
---

## Init

### Generate go.mod

Initialize the modules, and name the module for compatibility with older tools that do not support go modules.


```sh
cd myRepo
go mod init github.com/myUsername/myRepo
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

## Code

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

> {"level":"info","ts":1596040471.750289,"caller":"go-modules/main.go:20","msg":"successfully performed http request"}


## Sources

[EVERYTHING You SHOULD know about Go Modules](https://youtu.be/Z1VhG7cf83M)
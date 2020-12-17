---
publish: true
title: Go Struct Override
description: How to (partially) override values of a struct, based on a new struct.
dateCreated: 2020-12-16
dateUpdated: 2020-12-17
language: go
author:
    firstname: Asten
    lastname: Mies
    twitter: astenmies
social:
    image: /static/media/modules.jpg
tags:
    - golang
    - struct
    - developers
---

How to (partially) override values of a struct, based on a new struct.
This snippet shows how to override only one of the colors of a default theme.

[Run on the Go playground](https://play.golang.org/p/1fC6q25a6OH)

```go
package main

import (
	"fmt"
	"reflect"
)

type palette struct {
	Bg         string
	Fg         string
	ContrastBg string
	ContrastFg string
}

type theme struct {
	palette
}

func newTheme() *theme {
	t := &theme{}
	t.palette = palette{
		Fg:         "white",
		Bg:         "white",
		ContrastBg: "red",
		ContrastFg: "white",
	}

	return t
}

type paletteCustom struct {
	ContrastBg string
}

var paletteOverrides = paletteCustom{
	ContrastBg: "green",
}

func main() {
	th := newTheme()

	refValue := reflect.ValueOf(paletteOverrides)
	refType := refValue.Type()

	for i := 0; i < refValue.NumField(); i++ {
		fieldName := refType.Field(i).Name
		fieldValue := refValue.Field(i).Interface()

		value := reflect.ValueOf(th).Elem().FieldByName(fieldName)
		value.Set(reflect.ValueOf(fieldValue))
	}

	// Should output "green" if the override occured correctly
	fmt.Println(th.ContrastBg)
}

```
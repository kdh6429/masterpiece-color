// GOROOT_BOOTSTRAP=/usr/local/go
// GOOS=js GOARCH=wasm go build -o lib.wasm build.go
package main

import (
	"fmt"
	"mp-color/myprocessor"
	"syscall/js"
)

func main() {
	c1 := make(chan struct{}, 0)
	registerCallbacks()
	println("Init wasm")
	<-c1
}

func process(this js.Value, data []js.Value) interface{} {
	println("data", data)
	return js.ValueOf(myprocessor.Do(fmt.Sprint("%s", data[0])))
}

func registerCallbacks() {
	js.Global().Set("process", js.FuncOf(process))
}

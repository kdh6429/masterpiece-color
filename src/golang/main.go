// GOROOT_BOOTSTRAP=/usr/local/go GOOS=js GOARCH=wasm -o test.wasm main.go

package main

import (
	"syscall/js"
)

func main() {
	c1 := make(chan struct{}, 0)
	registerCallbacks()
	println("Init wasm")
	<-c1
}

func process(this js.Value, i []js.Value) interface{} {
	return js.ValueOf(i[0].Int() + i[1].Int())
	// value1 := js.Global().Get("document").Call("getElementById", i[0].String()).Get("value").String()
	// value2 := js.Global().Get("document").Call("getElementById", i[1].String()).Get("value").String()

	// int1, _ := strconv.Atoi(value1)
	// int2, _ := strconv.Atoi(value2)

	// //js.Global().Get("document").Call("getElementById", i[2].String()).Set("value", int1+int2)
	// log.Println("result:", int1+int2)

	// return js.ValueOf(int1 + int2)
	// //return js.ValueOf(i[0].Int() + i[1].Int())
}

func registerCallbacks() {
	js.Global().Set("process", js.FuncOf(process))
}

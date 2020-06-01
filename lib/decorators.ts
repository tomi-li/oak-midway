export function f() {
  console.log("f(): evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target, propertyKey, descriptor);
    console.log("f(): called");
  };
}

export function g() {
  console.log("g(): evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target, propertyKey, descriptor);
    console.log("g(): called");
  };
}

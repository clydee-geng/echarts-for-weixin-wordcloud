export default function (obj) {
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    throw new Error("not object");
  }
  obj.$on = function (name, cb) {
    this[name] = cb;
  };

  obj.$asyncEmit = function (name, args, wait = 0) {
    this.timer = setTimeout(() => {
      if (typeof this[name] === "function") {
        this[name](args);
      }
      clearTimeout(this.timer);
    }, wait);
  };
  obj.$remove = function (name) {
    delete this[name];
  };
}

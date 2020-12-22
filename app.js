// Get Localstorage As Storage
var storage = window.localStorage;
console.log(storage);
storage.clear();
storage.setItem("name", "Ehan Muurtaza");
storage.setItem("age", "30");
storage.setItem("email", "ehan@gmail.com");
console.log(storage.getItem("age"));

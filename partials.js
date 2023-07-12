function PersonInfo(greeting) {
    if (greeting === void 0) { greeting = "wellcome"; }
    var info1 = { firstName: "mohammed", age: 20 }; // email is optional
    var info2 = { firstName: "ahmed", LastName: "yousef" }; // age is optional
    console.log("".concat(greeting), info1);
    console.log("".concat(greeting), info2);
}
PersonInfo();

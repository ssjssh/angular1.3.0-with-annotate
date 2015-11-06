function Contact(name, email) {
    this.name = name;
    this.email = email;
}

Contact.prototype.dump = function () {
    console.log(this.name + ", " + this.email);
};
var o = {};
var obj = Contact.apply(o, ["ssj", '163.com']);
console.log(obj);
console.log(o);
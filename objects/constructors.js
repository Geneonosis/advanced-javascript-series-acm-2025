function User(firstName, lastName, eMail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.eMail = eMail;
}

const user = new User("Gene", "Tigner", "genetigner@proton.me");
console.log(user);

User.prototype.role = "admin";

console.log(user.role);

const newUser = new User("John", "Doe", "JohnDoe@doe.com");

console.log(newUser);
console.log(newUser.role);

User.prototype.printName = function () {
    const result = `Name: ${this.firstName} ${this.lastName}`;
    console.log(result);
}

user.printName()
newUser.printName()
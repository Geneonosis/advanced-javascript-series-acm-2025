/******
 * documentation on working with objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
 ******/

export const standardObject = {}

export const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    role: 'admin',
    printName() {
        console.log(`${this.firstName} ${this.lastName} ${this.email}`)
    }
}

console.log(user);
console.log("first name: ", user.firstName);
console.log("last name:  ", user["lastName"]);
console.log("non existent property", user.someProperty);
user.printName();

const keys = Object.keys(user);
const ownProps = Object.getOwnPropertyNames(user);
console.log(keys);
console.log(ownProps);

const showProps = (obj, objName) => {
    let result = "";
    for (const i in obj) {
        if (Object.hasOwn(obj,i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(result);
}

showProps(user, "user");

console.log("lastName" in user);
delete user.lastName;
console.log("lastName" in user);
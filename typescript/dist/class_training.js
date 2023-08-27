"use strict";
console.log("apple");
class TUser {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error("Should be more then 1");
        this._courseCount = courseNum;
    }
}
const manivel = new TUser("22@g.com", "sdf");
manivel.courseCount;
console.log(manivel.courseCount);
class subTUser extends TUser {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourCount() {
        this._courseCount = 3;
    }
}
//# sourceMappingURL=class_training.js.map
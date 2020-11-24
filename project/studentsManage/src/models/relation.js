const Class = require("./Class");
const Student = require("./Students");
Class.hasMany(Student);
Student.belongsTo(Class);
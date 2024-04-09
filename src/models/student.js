
// Represents student with associated fields
export default class Student {
    constructor({user, student_id, department=null, year=null, degree=null}) {
        this.user = user;
        this.student_id = student_id;
        this.department = department;
        this.year = year;
        this.degree = degree;
    }
}
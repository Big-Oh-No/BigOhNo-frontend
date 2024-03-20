export default class EnrollmentRequests {
    constructor({student_id, course_id, firstName,  email, dept, code, term, year, lastName = null}) {
        this.student_id = student_id;
        this.course_id = course_id;
        this.firstName = firstName;
        this.email = email;
        this.dept = dept;
        this.code = code;
        this.term = term;
        this.year = year;
        this.lastName = lastName;
    }
}
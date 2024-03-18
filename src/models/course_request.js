export default class CourseRequest {
    constructor({ id, dept, code, name, term, year, credits, total_seats, taken_seats, status, teacher_name, description = null, syllabus_url = null, image_url = null, comment = null}) {
        this.id = id;
        this.dept = dept;
        this.code = code;
        this.name = name;
        this.description = description;
        this.syllabus_url = syllabus_url;
        this.image_url = image_url;
        this.term = term;
        this.year = year;
        this.credits = credits;
        this.total_seats = total_seats;
        this.taken_seats = taken_seats;
        this.teacher_name = teacher_name;
        this.status = status;
        this.comment = comment;
    }
}
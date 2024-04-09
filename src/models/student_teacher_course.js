// Represents course for student and teacher use with associated fields
export default class StudentTeacherCourse {
    constructor({meta, assignments, teacher_email, teacher_profile_url = null, teacher_office = null, teacher_contact = null}) {
        this.meta = meta;
        this.assignments = assignments;
        this.teacher_email = teacher_email;
        this.teacher_profile_url = teacher_profile_url;
        this.teacher_office = teacher_office;
        this.teacher_contact = teacher_contact;
    }
}
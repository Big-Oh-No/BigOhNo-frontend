export default class StudentSubmissionsModel {
    constructor ({
        student_email,
        student_name,
        file_url = null,
        grade = null,
        created_at = null
    }) {
        this.student_email = student_email;
        this.student_name = student_name;
        this.file_url = file_url;
        this.grade = grade;
        this.created_at = created_at;
    }
}

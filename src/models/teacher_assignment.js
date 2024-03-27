export default class TeacherAssignmentModel {
    constructor ({
        id,
        title,
        file_url = null, // Default value for file_url
        deadline,
        total_grade,
        published,
        responses
    }) {
        this.id = id;
        this.title = title;
        this.file_url = file_url;
        this.deadline = deadline;
        this.total_grade = total_grade;
        this.published = published;
        this.responses = responses;
    }
}

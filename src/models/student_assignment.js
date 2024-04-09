// Represents Student assignments with associated fields
export default class StudentAssignmentModel {
    constructor ({
        id,
        title,
        file_url = null, // Default value for file_url
        deadline,
        total_grade,
        published,
        grade = null,
        created_at = null
    }) {
        this.id = id;
        this.title = title;
        this.file_url = file_url;
        this.deadline = deadline;
        this.total_grade = total_grade;
        this.published = published;
        this.grade = grade;
        this.created_at = created_at;
    }
}

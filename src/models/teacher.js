// Represents teacher with associated fields
export default class Teacher {
    constructor({user, teacher_id, faculty=null, office=null, contact=null}) {
        this.user = user;
        this.teacher_id = teacher_id;
        this.faculty = faculty;
        this.office = office;
        this.contact = contact;
    }
}
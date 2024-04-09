// Represents Administrator's associated fields
export default class Admin {
    constructor({user, admin_id, contact=null, office=null}) {
        this.user = user;
        this.admin_id = admin_id;
        this.contact = contact;
        this.office = office;
    }
}

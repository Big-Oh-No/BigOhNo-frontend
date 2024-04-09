// Represents verification request with associated fields
export default class VerificationRequests {
    constructor({firstName,  email, role, lastName = null}) {
        this.firstName = firstName;
        this.email = email;
        this.role = role;
        this.lastName = lastName;
    }
}
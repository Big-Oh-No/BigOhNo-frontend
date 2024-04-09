// Represents user with associated fields
export default class User {
    constructor({id, first_name, email, role, verified, last_name=null, bio=null, gender=null, pronouns=null, profile_image=null}) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.bio = bio;
        this.email = email;
        this.gender = gender;
        this.pronouns = pronouns;
        this.profile_image = profile_image;
        this.role = role;
        this.verified = verified;
    }
}
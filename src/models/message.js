export default class MessageModel {
    constructor({ id, message, upvotes, date_created, author_name, author_pfp = null }) {
        this.id = id;
        this.message = message;
        this.upvotes = upvotes;
        this.date_created = date_created;
        this.author_name = author_name;
        this.author_pfp = author_pfp;
    }
}
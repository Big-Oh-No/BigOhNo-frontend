export default class DiscussionCardModel {
    constructor({ id, title, num_replies, date_created, author_name, author_pfp = null }) {
        this.id = id;
        this.title = title;
        this.num_replies = num_replies;
        this.date_created = date_created;
        this.author_name = author_name;
        this.author_pfp = author_pfp;
    }
}
// Represents MCQ Questions with associated fields
export default class MCQQuestion {
    constructor({question, options, answer}) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}
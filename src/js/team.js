export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(char) {
        if (this.members.has(char)) throw new Error('Данный персонаж уже есть в команде');
        this.members.add(char);
    }

    addAll(...chars) {
        chars.forEach((member) => this.add(member));
    }

    toArray() {
        return [...this.members];
    }
}
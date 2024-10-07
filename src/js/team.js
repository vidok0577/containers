export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(char) {
        if (this.members.has(char)) throw new Error('Данный персонаж уже есть в команде');
        this.members.add(char);
    }

    addAll(...chars) {
        for (const i of chars) {
            this.members.add(i);
        };
    }

    toArray() {
        return [...this.members];
    }
}
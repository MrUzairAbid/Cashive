export class CashEntry {
    constructor(description, amount, date, type) {
        this.description = description;
        this.amount = amount;
        this.expenseDateOccurred = date;
        this.type = type
    }
}
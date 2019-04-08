import { Requirements } from "./requirements.model"

export class Reservation {
    public name: string
    public startDate: string
    public endDate: string

    public requirements: Requirements

    constructor() {
        this.name = ""
        this.startDate = ""
        this.endDate = ""
        this.requirements = new Requirements
    }
}
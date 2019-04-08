export class Address {
    public address: string
    public country: string
    public community: string
    public city: string
    public cp: number

    constructor() {
        this.address = ""
        this.country = ""
        this.community = ""
        this.city = ""
        this.cp = 0
    }
}
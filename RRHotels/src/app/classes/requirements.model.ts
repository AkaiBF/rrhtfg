import { Address } from "./address.model";
import { Features } from "./features.model"

export class Requirements {
    public address: Address
    public features: Features

    constructor() {
        this.address = new Address
        this.features = new Features
    }
}
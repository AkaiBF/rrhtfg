export class Features {
    score: number
    stars: number
    phone: any
    television: any
    safebox: any
    minibar: any
    wifi: any
    bath: boolean
    shower: boolean
    heating: boolean
    cooling: boolean
    laundry: boolean
    garage: boolean
    hairdresser: boolean
    gym: boolean
    warehouse: boolean
    lenceryWarehouse: boolean
    library: boolean
    spa: boolean
    swimmingPool: boolean
    pcRoom: boolean
    sportCenter: boolean
    playroom: boolean
    outterActivities: boolean

    constructor() {
        this.score = 0
        this.stars = 0
        this.phone = {
            enabled: false,
            free: false
        }
        this.television = {
            enabled: false,
            free: false, 
            extra: false,
            flat: false
        }
        this.safebox = {
            enabled: false,
            free:false
        }
        this.minibar = {
            enabled: false,
            free: false
        }
        this.wifi = {
            enabled: false,
            free: false
        }
        this.bath = false
        this.shower = false
        this.heating = false
        this.cooling = false
        this.laundry = false
        this.garage = false
        this.hairdresser = false
        this.gym = false
        this.warehouse = false
        this.lenceryWarehouse = false
        this.library = false
        this.spa = false
        this.swimmingPool = false
        this.pcRoom = false
        this.sportCenter = false
        this.playroom = false
        this.outterActivities = false

    }
}
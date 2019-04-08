import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service'
import { AppSettings } from '../app-settings'

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
    public baseroute = AppSettings.API_URL
    public uploadImage: any
    public perfil: any = {
        name: 'Name',
        surname: '',
        email: '',
        phone: 0,
        nationality: '',
        birthday: '',
        photo: ''
    }
    public editing:boolean

    constructor(private _peopleSrv: PeopleService) {
        
    }

    ngOnInit() {
        this.editing = false;
        this._peopleSrv.profile().subscribe(docs => {
            this.perfil = docs
        })
    }

    update(): void {
        let reader = new FileReader()
        reader.onloadend = () => {
            this.uploadImage = reader.result
            this._peopleSrv.update(this.perfil.name, this.perfil.surname, this.perfil.email, this.perfil.birthday, this.perfil.phone, this.perfil.nationality, reader.result).subscribe(result => {
                this._peopleSrv.profile().subscribe(result => {
                    this.perfil = result
                    this.editing = false
                }, error => {
                })
            })
            
        }
        reader.readAsDataURL(this.uploadImage[0])
    }

    getAge(date: string): number {
        let year = parseInt(date.substring(0, 4))
        let month = parseInt(date.substring(5, 7))
        let day = parseInt(date.substring(8, 10))
        let today = new Date()
        let age = today.getFullYear() - year
        if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
            age--
        }
        return age
    }

    transformDate(date: string): string {
        return date.replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$2-$1')
    }

    loadFile(fileInput: any) {
        this.uploadImage = <Array<File>>fileInput.target.files
        if (this.uploadImage[0].size < 200000 && (this.uploadImage[0].type == 'image/jpeg' || this.uploadImage[0].type == 'image/png')) {
            let output = document.getElementById('imgpreview') as HTMLImageElement
                output.src = URL.createObjectURL(fileInput.target.files[0])
            return this.uploadImage
        }
    }

    public ProfilePage() {
    }
}

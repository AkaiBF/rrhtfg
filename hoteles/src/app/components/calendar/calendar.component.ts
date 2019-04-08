import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  today:Date
  constructor() { }

  ngOnInit() {
    this.today = new Date()
    this.huecosfin(this.today.getMonth(), this.today.getFullYear())
  }

  nextmonth() {
    if(this.today.getMonth() == 11) {
      this.today.setMonth(0)
    }
    else {
      this.today.setMonth(this.today.getMonth() + 1)
    }
  }

  prevmonth() {
    this.today.setMonth(this.today.getMonth() - 1)
  }

  getMonth(number) {
    var months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ]
    return months[number]
  }

  huecos(month, year) {
    var date = new Date(year, month, 1)
    let result = date.getDay()
    let array
    if(result == 0)
      array = new Array(6)
    else 
      array = new Array(result - 1)
    for(var i = array.length - 1; i >= 0; i--) {
      var dayLess = date.getDate()
      date.setDate(dayLess - 1)
      array[i] = date.getDate()
    }
    return array
  }

  monthdays(month, year) {
    var date = new Date(year, month + 1, 1)
    date.setDate(date.getDate() - 1)
    let result = date.getDate()
    let array = new Array(result)
    for(let i = 0; i < result; i++) {
      array[i] = i + 1
    }
    return array
  }

  huecosfin(month, year) {
    var date = new Date(year, month + 1, 1)
    date.setDate(date.getDate() - 1)
    let result = date.getDay()
    if(result == 0) result = 7
    let array = new Array(7 - result)
    for(let i = 0; i < array.length; i++) 
      array[i] = i + 1
    return array
  }
  full(day, month, year) {
    if(day == 12 && month == 4 && year==2018)
    return true;
    return false
  }
}

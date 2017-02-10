import { Component } from '@angular/core';
import { Person } from '../../models/person';

@Component({
    templateUrl: 'lists.html'
})
export class ListsPage {
    persons: Person[] = [];

    constructor() {
        this.persons.push(new Person('assets/img/venkman.jpg','Venkman','Back off man, I\'m a scientist'));
        this.persons.push(new Person('assets/img/spengler.jpg','Egon','We\'re gonna go full stream.'));
        this.persons.push(new Person('assets/img/stantz.jpg','Ray','Ugly little spud, isn\'t he?'));
    }
}
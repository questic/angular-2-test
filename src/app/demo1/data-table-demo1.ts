import { Component } from '@angular/core';
import { DataTableResource } from '../data-table';
import persons from './data-table-demo1-data';


@Component({
    selector: 'data-table-demo-1',
    providers: [],
    templateUrl: './data-table-demo1.html',
    styleUrls: ['./data-table-demo1.css']
})
export class DataTableDemo1 {

    itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        alert('Address:' + rowEvent.row.item.address.street + ' ' + rowEvent.row.item.address.suite + ' ' + rowEvent.row.item.address.city + ' ' +  rowEvent.row.item.address.zipcode + '\nGeo:' + rowEvent.row.item.address.geo.lat + ' ' + rowEvent.row.item.address.geo.lng + '\nCompany:' + rowEvent.row.item.company.name + ' ' + rowEvent.row.item.company.catchPhrase + ' ' + rowEvent.row.item.company.bs);
    }


    rowTooltip(item) { return item.jobTitle; }
}

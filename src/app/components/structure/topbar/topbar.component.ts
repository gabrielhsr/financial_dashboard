import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
	title = 'Painel';

	constructor() {}

	ngOnInit(): void {}
}
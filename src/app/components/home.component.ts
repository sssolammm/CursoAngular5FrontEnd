import { Component } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html'
})

export class HomeComponent{
	public titulo: string;

	constructor(){
		this.titulo = "Webapp de productos con angular 5";
	}

	ngOnInit(){
		console.log("se ha cargado el componente home.component.ts");
	}


}
import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrSevice } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
	templateUrl: 'app/events/events-list.component.html',
	styles:[`
		.well div{ color: red }
	`]
})
export class EventsListComponent implements OnInit {
	
	events: IEvent[];

	constructor(private eventService: EventService,
		private toastrService: ToastrSevice,
		 private route: ActivatedRoute){

	}

	ngOnInit(){

		//this.events = this.eventService.getEvents();
		// this.eventService.getEvents().subscribe( events =>  {
		// 	this.events = events;
		// });

		this.events = this.route.snapshot.data['events'];
	}

	handleThumbanilClick(eventName: string){
		this.toastrService.succes(eventName);
	}

	handleEventClicked(data: any){
		console.log('received:', data)
	}
}
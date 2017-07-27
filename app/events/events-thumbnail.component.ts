import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
	selector: 'events-thumbnail',
	templateUrl: 'app/events/events-thumbnail.component.html',
	styles: [`
		.pad-left { margin-left: 10px; }
		.thumbnail { min-height: 210px }
		.well div { color: #bbb }
	`]
})

export class EventsThumbnailComponent {
	@Input() event: IEvent;
	somePropertie: any = "some value";
	@Output() eventClick = new EventEmitter();

	handleClickMe(){
		console.log('clicked!');
		this.eventClick.emit(this.event.name);
	}

	logFoo() {
		console.log('foo');
	}

	/*getStartTimeClass() {
		const isEarlyStart = this.event && this.event.time == '8:00 am';
		return {green: isEarlyStart, bold: isEarlyStart}
	}*/

	/*getStartTimeClass() {
		if (this.event && this.event.time == '8:00 am')
			return 'green bold'; 
	}*/

	getStartTimeClass(): any {
		if (this.event && this.event.time == '8:00 am')
			return {color: '#0003300', 'font-weight': 'bold'}; 
		return {}
	}

	getStartTimeStyle() {
		if(this.event && this.event.time === '8:00 am')
			return {color: '#003300', 'font-weight': 'bold'};
		return {};
	}
}
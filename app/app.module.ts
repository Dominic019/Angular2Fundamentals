import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
	EventsListComponent,
	EventsThumbnailComponent,
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator,
	EventListResolve,
	CreateSessionComponent
 } from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrSevice } from './common/toastr.service';
import { Error404Component } from './error/404.component';
import { AuthService } from './user/auth.service';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventsThumbnailComponent,
		NavBarComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
		CreateSessionComponent
	],
	providers:[
		EventService, 
		ToastrSevice,
		EventRouteActivator,
		EventListResolve,
		AuthService,
		{ 
			provide: 'canDesactivateCreateEvent', 
			useValue: checkDirtyState
		}
	],
	bootstrap: [EventsAppComponent] 
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
	if(component.isDirty)
		return window.confirm('you have not saved this event, do you really want yo cancel?');
	
	return true;
}
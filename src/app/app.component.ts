import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'The "Like" Button';
	
	movie = {
		title: 'Needs Title',
		description: 'Lovely little movie with that one woman who was in that other movie.',
		likesCount: 10,
		isLiked: true
	}
}

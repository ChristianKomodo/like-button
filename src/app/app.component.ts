import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'The "Like" Button';

	movies = [
		{
			title: 'Alien',
			description: 'In space...no one can hear you scream.',
			likesCount: 10,
			isLiked: false
		},
		{
			title: 'The Dark Knight',
			description: 'Batman has been able to keep a tight lid on crime in Gotham City, until the Joker comes to town.',
			likesCount: 13,
			isLiked: true
		},
		{
			title: 'The Godfather',
			description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
			likesCount: 25,
			isLiked: true
		},
	]
}

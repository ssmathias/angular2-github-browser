import { ComponentAnnotation as Component, ViewAnnotation as View, NgIf, NgFor } from 'angular2/angular2';
import { ObservableWrapper } from 'angular2/src/facade/async';
import { RouteParams } from 'angular2/router';
import { GithubApi } from 'app/services/githubApi';

@Component({
	selector: 'userrepositories',
	hostInjector: [GithubApi]
})
@View({
	templateUrl: 'app/components/userrepositories/userrepositories.html',
	directives: [NgIf, NgFor]
})

export class UserRepositories {
	constructor( githubApi: GithubApi, routeParams: RouteParams) {
		this.repositories = [];
		this.username = routeParams.params.username;
		githubApi.getUserRepositories(routeParams.params.username).subscribe(userrepositories => this.repositories = userrepositories);
	}
}
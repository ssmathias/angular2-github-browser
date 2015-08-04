import { ComponentAnnotation as Component, ViewAnnotation as View, NgIf } from 'angular2/angular2';
import { ObservableWrapper } from 'angular2/src/facade/async';
import { RouteParams, RouterLink } from 'angular2/router';
import { GithubApi } from 'app/services/githubApi';

@Component({
	selector: 'userprofile',
	hostInjector: [GithubApi]
})
@View({
	templateUrl: 'app/components/userprofile/userprofile.html',
	directives: [NgIf, RouterLink]
})

export class UserProfile {
	constructor( githubApi: GithubApi, routeParams: RouteParams) {
		this.profile = {};
		githubApi.getUserProfile(routeParams.params.username).subscribe(userProfile => this.profile = userProfile);
	}
}
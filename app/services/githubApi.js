import { ComponentAnnotation as Component } from 'angular2/angular2';
import { Http, httpInjectables } from 'angular2/http';

export class GithubApi {

    constructor(http: Http) {
        this.http = http;
		this.baseUrl = 'https://api.github.com/'
    }

    getUserProfile(username) {
		return this.http.get(this.baseUrl + "users/" + username).toRx().map(res => res.json());
    }

    getUserRepositories(username) {
	    return this.http.get(this.baseUrl + "users/" + username + "/repos").toRx().map(res => res.json());
    }

}
import { ComponentAnnotation as Component, ViewAnnotation as View, 
         bootstrap, bind } from 'angular2/angular2';
import { RouteConfig, RouterOutlet, Router } from 'angular2/router';
import { routerInjectables, LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';
import { httpInjectables } from 'angular2/http';

import { UserProfile } from 'app/components/userprofile/userprofile';
import { UserRepositories } from 'app/components/userrepositories/userrepositories';

@Component({
  selector: 'app'
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/',  redirectTo: '/user/ssmathias/profile' },
  { path: '/user/:username', redirectTo: '/user/:username/profile' },
  { path: '/user/:username/profile', as: 'userprofile', component: UserProfile },
  { path: '/user/:username/repos', as: 'userrepositories', component: UserRepositories },
])
export class App {
  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;
  }
}

//Bootstrap App
bootstrap(App, [
    httpInjectables,
    routerInjectables,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]);

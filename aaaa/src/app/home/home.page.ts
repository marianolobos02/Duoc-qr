import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) {

    this.activatedRouter.queryParams.subscribe(
      params => {
        let state = this.router.getCurrentNavigation()?.extras.state
        if (state){
          console.log(`User: ${state['user']}`);
        }
      }
    );

  }

}

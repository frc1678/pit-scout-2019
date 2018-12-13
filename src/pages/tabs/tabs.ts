import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TeamsPage } from '../teams/teams';
import { NullPage } from '../null/null';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TeamsPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

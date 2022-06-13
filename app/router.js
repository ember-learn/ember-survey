import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('results', function() {
    this.route('ember-community-survey-2016', { path: '/2016' });
    this.route('ember-community-survey-2017', { path: '/2017' });
    this.route('ember-community-survey-2018', { path: '/2018' });
    this.route('ember-community-survey-2019', { path: '/2019' });
    this.route('ember-community-survey-2020', { path: '/2020' });
  });
});

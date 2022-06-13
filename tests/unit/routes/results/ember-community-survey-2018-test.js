import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | results/ember-community-survey-2018', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:results/ember-community-survey-2018');
    assert.ok(route);
  });
});

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Ember.testing = true;

var App = requireModule('aircheck/app');

App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

function exists(selector) {
  return !!find(selector).length;
}

function equal(actual, expected, message) {
  message = message || QUnit.jsDump.parse(expected) + " expected but was " + QUnit.jsDump.parse(actual);
  QUnit.equal.call(this, expected, actual, message);
}

window.exists = exists;
window.equal = equal;

Ember.Container.prototype.stub = function(fullName, instance) {
  instance.destroy = instance.destroy || function() {};
  this.cache.dict[fullName] = instance;
};

/*global sinon, QUnit, test*/
sinon.assert.fail = function (msg) {
    QUnit.ok(false, msg);
};

sinon.assert.pass = function (assertion) {
    QUnit.ok(true, assertion);
};

sinon.config = {
    injectIntoThis: true,
    injectInto: null,
    properties: ["spy", "stub", "mock", "clock", "sandbox"],
    useFakeTimers: false,
    useFakeServer: false
};

(function (global) {
    var qTest = QUnit.test;

    QUnit.test = global.test = function (testName, expected, callback, async) {
        if (arguments.length === 2) {
            callback = expected;
            expected = null;
        }

        return qTest(testName, expected, sinon.test(callback), async);
    };
}(this));

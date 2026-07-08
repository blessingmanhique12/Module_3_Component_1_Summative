const { JSDOM } = require('jsdom');
const chai = require('chai');

const dom = new JSDOM('<!DOCTYPE html><html><body><button id="runTasksButton">Run Tasks</button><div id="outputElement"></div></body></html>', {
  url: 'http://localhost/'
});

const { window } = dom;

global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.HTMLElement = window.HTMLElement;
global.Node = window.Node;
global.expect = chai.expect;
globalThis.window = window;
globalThis.document = window.document;
globalThis.navigator = window.navigator;
globalThis.HTMLElement = window.HTMLElement;
globalThis.Node = window.Node;
globalThis.expect = chai.expect;
globalThis.marks = [45, 60, 85, 30, 95];

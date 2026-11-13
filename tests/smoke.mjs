import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const listeners = {};
const store = () => {
  const data = new Map();
  return {
    getItem: (key) => data.has(key) ? data.get(key) : null,
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: (key) => data.delete(key)
  };
};

const root = { innerHTML: '' };
const toast = { appendChild() {} };
const location = { hash: '#overview' };
const context = {
  console,
  Date,
  location,
  sessionStorage: store(),
  localStorage: store(),
  setTimeout() {},
  document: {
    documentElement: { dataset: {} },
    title: '',
    getElementById: (key) => key === 'app' ? root : key === 'toast' ? toast : null,
    addEventListener: (type, handler) => { listeners[type] = handler; },
    querySelector: () => null,
    createElement: () => ({ className: '', innerHTML: '', remove() {} })
  },
  window: { scrollTo() {}, addEventListener() {} }
};
vm.runInNewContext(source, context, { filename: 'app.js' });

assert.match(root.innerHTML, /never deployed/i, 'Landing screen must disclose original project status');
assert.match(root.innerHTML, /owner@hnt.demo/, 'Owner credentials should be available');
assert.match(root.innerHTML, /moderator@hnt.demo/, 'Moderator account should be available in the code-generated UI after selection');

function submit(id, elements) {
  listeners.submit({ preventDefault() {}, target: { id, elements } });
}
function click(action, id, key) {
  listeners.click({
    target: {
      closest(selector) {
        if (selector === '[data-nav]') return null;
        if (selector === '[data-action]') return { dataset: { action, id, key } };
        return null;
      }
    }
  });
}
function navigate(route) {
  listeners.click({
    target: {
      closest(selector) {
        if (selector === '[data-nav]') return { dataset: { nav: route } };
        return null;
      }
    }
  });
}
submit('login-form', { email: { value: 'owner@hnt.demo' }, password: { value: 'Demo123!' } });
assert.match(root.innerHTML, /Operations overview/, 'Owner should see their overview');
assert.match(root.innerHTML, /Portfolio demo/, 'App should retain demo labeling');
navigate('events');
assert.match(root.innerHTML, /Metro Invitational/, 'Sample events should be visible');
assert.match(root.innerHTML, /Add demo event/, 'Owner can edit sample event metadata');

click('new-event');
assert.match(root.innerHTML, /Create sample event/, 'Event editor must be accessible');
submit('event-form', {
  id: { value: '' },
  title: { value: 'Test Fictional Event' },
  venue: { value: 'Preview Venue' },
  date: { value: '2026-11-28' },
  time: { value: '15:00' },
  status: { value: 'Scheduled' },
  rounds: { value: '0' },
  description: { value: 'Local test event' }
});
assert.match(root.innerHTML, /Test Fictional Event/, 'Create event should update local UI');
assert.match(context.sessionStorage.getItem('hnt-demo-events'), /Test Fictional Event/, 'Local mock state should be saved');

click('logout');
assert.match(root.innerHTML, /never deployed/i, 'Logout should return to the disclaimer');
submit('login-form', { email: { value: 'member@hnt.demo' }, password: { value: 'Demo123!' } });
assert.match(root.innerHTML, /Member overview/, 'Member should see a role-specific overview');
assert.doesNotMatch(root.innerHTML, /People directory/, 'Member should not see elevated navigation');
navigate('events');
assert.doesNotMatch(root.innerHTML, /Add demo event/, 'Member should not have event editor access');

assert.doesNotMatch(source, /\bfetch\s*\(/, 'No network fetches should be used');
assert.doesNotMatch(source, /\bXMLHttpRequest\b/, 'No XHR requests should be used');
console.log('Hari ng Tari static-demo smoke tests passed');

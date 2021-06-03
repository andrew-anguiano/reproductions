import { mount } from '@cypress/react';
import { MyComponent } from './MyComponent';

describe('My thing', () => {
  it('should work', () => {
    mount(<MyComponent>hello</MyComponent>);
    cy.get('div');
  });
});

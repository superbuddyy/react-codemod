// Uses options:
// --create-class-module-name=createReactClass__deprecated
// --create-class-variable-name=createReactClass__deprecated

const React = require('react');

const createReactClass__deprecated = require('createReactClass__deprecated');

const Component = createReactClass__deprecated({
  displayName: 'class-create-class-naming.input',
  mixins: [{}],

  render() {
    return <div />;
  },
});

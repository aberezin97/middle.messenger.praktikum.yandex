import Block from '../../modules/block';
import template from './template';

const pug = require('pug');

class Error500Page extends Block {
  constructor(props: Object) {
    super('div', props);
  }

  render() {
    const fn = pug.compile(template, {});
    return fn(this.props);
  }
}

export default Error500Page;

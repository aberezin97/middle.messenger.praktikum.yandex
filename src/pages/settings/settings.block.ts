import Block from '../../utils/block';
import template from './settings.template';
import './settings.styles.scss';

import Card from '../../components/card/card.block';
import SettingsDataForm from '../../components/settings-data-form/settings-data-form.block';
import SettingsUserData from '../../components/settings-user-data/settings-user-data.block';
import SettingsLinkback from '../../components/settings-linkback/settings-linkback.block';
import Button from '../../components/button/button.block';
import SettingsAvatar from '../../components/settings-avatar/settings-avatar.block';
import userController from '../../controllers/user';
import { withUser } from '../../utils/connect';

const pug = require('pug');

class SettingsPage extends Block {
  constructor(props: Object) {
    super('div', {
      ...props,
      user: {
        login: '',
      },
      attributes: {
        class: 'page page-center',
      },
      linkback: new SettingsLinkback({
        backUrl: '/messenger',
      }),
      card: new Card({
        title: 'Настройки',
        body: new SettingsDataForm({}),
      }),
    });
    userController.getUser();
  }

  render() {
    this.children.avatar = new SettingsAvatar({
      url: this.props.user?.avatar,
    });
    document.title = 'Мессенджер - Настройки';
    return this.compile(template, this.props);
  }
}

export default withUser(SettingsPage);

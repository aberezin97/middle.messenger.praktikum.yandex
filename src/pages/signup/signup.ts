import Block from '../../modules/block';
import SignupForm from './signup-form/signup-form';
import Button from '../../components/button/button';
import template from './template';
import { getDataFromInputs, isAllInputsValid } from '../../modules/forms';
import { SignupController } from '../../controllers/signup';

const pug = require('pug');

class SignupPage extends Block {
  constructor(props: Object) {
    const signUpButton = new Button({
      text: 'Зарегистрироваться',
      type: Button.Type.Blue,
      isDisabled: true,
      events: {
        click: (e: PointerEvent) => {
          e.stopPropagation();
          console.log(
            getDataFromInputs([
              'email',
              'login',
              'first_name',
              'second_name',
              'phone',
              'password',
              'password_confirmation',
            ])
          );
          const signupController = new SignupController();
          signupController.signup(
            getDataFromInputs([
              'email',
              'login',
              'first_name',
              'second_name',
              'phone',
              'password',
              'password_confirmation',
            ])
          );
        },
      },
    });
    super('div', {
      ...props,
      signUpButton,
      form: new SignupForm({
        events: {
          focusout: (e: Event) => {
            if (isAllInputsValid()) {
              signUpButton.setProps({ isDisabled: false });
            } else {
              signUpButton.setProps({ isDisabled: true });
            }
          },
        },
      }),
    });
  }

  render() {
    const fn = pug.compile(template, {});
    document.title = 'Мессенджер - Регистрация';
    return fn(this.props);
  }
}

export default SignupPage;

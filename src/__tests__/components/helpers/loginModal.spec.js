import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import LoginModal from '../../../../src/components/helpers/loginModal';

describe('loginModal', () => {
  let wrapper;
  const component = React.createElement(withStyles(<LoginModal />));

  const renderComponent = () => shallow(component);

  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('is a div', () => {
    expect(wrapper.type()).toEqual('div');
  });

  describe('Login Modal trigger', () => {
    let loginModalTrigger;

    beforeEach(() => {
      loginModalTrigger = wrapper.childAt(0);
    });

    it('is a Button', () => {
      expect(loginModalTrigger.type()).toEqual(Button);
    });
  });

  describe('dialog', () => {
    let dialog;

    beforeEach(() => {
      dialog = wrapper.childAt(1);
    });

    it('is a dialog', () => {
      expect(dialog.type()).toEqual(Dialog);
    });
    describe('dialog title', () => {
      let dialogTitle;

      beforeEach(() => {
        dialogTitle = dialog.childAt(0);
      });

      it('is a dialog title', () => {
        expect(dialogTitle.type()).toEqual(DialogTitle);
      });
      describe('title text', () => {
        let titleText;

        beforeEach(() => {
          titleText = dialogTitle.childAt(0);
        });

        it('is a header', () => {
          expect(titleText.type()).toEqual('h2');
        });
      });
    });
    describe('dialog content', () => {
      let dialogContent;

      beforeEach(() => {
        dialogContent = dialog.childAt(1);
      });

      it('is a dialog content', () => {
        expect(dialogContent.type()).toEqual(DialogContent);
      });
      describe('divider', () => {
        let divider;

        beforeEach(() => {
          divider = dialogContent.childAt(0);
        });

        it('is a header', () => {
          expect(divider.type()).toEqual('h3');
        });
      });
      describe('facebook', () => {
        let facebook;

        beforeEach(() => {
          facebook = dialogContent.childAt(1);
        });

        it('is a button', () => {
          expect(facebook.type()).toEqual(Button);
        });
      });
      describe('google', () => {
        let google;

        beforeEach(() => {
          google = dialogContent.childAt(2);
        });

        it('is a button', () => {
          expect(google.type()).toEqual(Button);
        });
      });
      describe('signup container', () => {
        let signupContainer;

        beforeEach(() => {
          signupContainer = dialogContent.childAt(3);
        });

        it('is a div', () => {
          expect(signupContainer.type()).toEqual('div');
        });
      });
    });
    describe('dialog actions', () => {
      let dialogActions;

      beforeEach(() => {
        dialogActions = dialog.childAt(2);
      });

      it('is a dialog action', () => {
        expect(dialogActions.type()).toEqual(DialogActions);
      });
      describe('action button', () => {
        let actionButton;

        beforeEach(() => {
          actionButton = dialogActions.childAt(0);
        });

        it('is a button', () => {
          expect(actionButton.type()).toEqual(Button);
        });
        describe('icon', () => {
          let icon;

          beforeEach(() => {
            icon = actionButton.childAt(0);
          });

          it('is a svg icon', () => {
            expect(icon.type()).toEqual(SvgIcon);
          });
          describe('path', () => {
            let path;

            beforeEach(() => {
              path = icon.childAt(0);
            });

            it('is a path', () => {
              expect(path.type()).toEqual('path');
            });
          });
        });
      });
    });
  });
});

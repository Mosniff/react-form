import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormContents } from './form-contents.component';
import { FormProvider } from '../../../context/form.context';

function renderComponent() {
  return render(
    <FormProvider>
      <FormContents />
    </FormProvider>,
  );
}

test('should show the user tab on render', () => {
  renderComponent();

  expect(screen.getByLabelText('name:')).toBeInTheDocument();
  expect(screen.getByLabelText('role:')).toBeInTheDocument();
  expect(screen.getByLabelText('email:')).toBeInTheDocument();
  expect(screen.getByLabelText('password:')).toBeInTheDocument();
});

test('should proceed to the next tab when valid details are submitted', () => {
  renderComponent();

  userEvent.type(screen.getByLabelText('name:'), 'test name');
  userEvent.type(screen.getByLabelText('email:'), 'test@email.com');
  userEvent.type(screen.getByLabelText('password:'), 'TestPassword123');
  userEvent.click(screen.getByText('Submit'));

  expect(screen.getByText('Receive updates about our products by email')).toBeInTheDocument();
  expect(screen.getByText('Receive communication by email for other products created by our team')).toBeInTheDocument();
  userEvent.click(screen.getByText('Submit'));

  expect(screen.getByText('Please verify your email address, you should have received an email from us already!')).toBeInTheDocument();
});

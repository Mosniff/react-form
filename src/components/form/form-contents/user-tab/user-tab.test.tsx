import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserTab } from './user-tab.component';
import { FormProvider } from '../../../../context/form.context';

function renderComponent() {
  return render(
    <FormProvider>
      <UserTab />
    </FormProvider>,
  );
}

test('should render with the 4 blank input fields', () => {
  renderComponent();

  expect(screen.getByLabelText('name:')).toHaveValue('');
  expect(screen.getByLabelText('role:')).toHaveValue('');
  expect(screen.getByLabelText('email:')).toHaveValue('');
  expect(screen.getByLabelText('password:')).toHaveValue('');
});

test('should display all current validation errors when submit is clicked', () => {
  renderComponent();

  expect(screen.queryByText('Name cannot be empty.')).not.toBeInTheDocument();
  expect(screen.queryByText('Must be a valid email address.')).not.toBeInTheDocument();
  expect(screen.queryByText('Password must be at least 9 characters and contain a number, an uppercase letter and a lowercase letter.')).not.toBeInTheDocument();

  userEvent.click(screen.getByText('Submit'));

  expect(screen.queryByText('Name cannot be empty.')).toBeInTheDocument();
  expect(screen.queryByText('Must be a valid email address.')).toBeInTheDocument();
  expect(screen.queryByText('Password must be at least 9 characters and contain a number, an uppercase letter and a lowercase letter.')).toBeInTheDocument();
});

test('should display validation requirements when field is first populated', () => {
  renderComponent();

  // name validation
  expect(screen.queryByText('Name cannot be empty.')).not.toBeInTheDocument();
  userEvent.type(screen.getByLabelText('name:'), 'a');
  expect(screen.queryByText('Name cannot be empty.')).not.toBeInTheDocument();
  userEvent.type(screen.getByLabelText('name:'), '{backspace}');
  expect(screen.queryByText('Name cannot be empty.')).toBeInTheDocument();

  // email validation
  expect(screen.queryByText('Must be a valid email address.')).not.toBeInTheDocument();
  userEvent.type(screen.getByLabelText('email:'), 'a');
  expect(screen.queryByText('Must be a valid email address.')).toBeInTheDocument();

  // password validation
  expect(screen.queryByText('Password must be at least 9 characters and contain a number, an uppercase letter and a lowercase letter.')).not.toBeInTheDocument();
  userEvent.type(screen.getByLabelText('password:'), 'a');
  expect(screen.queryByText('Password must be at least 9 characters and contain a number, an uppercase letter and a lowercase letter.')).toBeInTheDocument();
});

test('should hide validation requirements when satisfied', () => {
  renderComponent();

  userEvent.click(screen.getByText('Submit'));

  expect(screen.queryByText('Name cannot be empty.')).toBeInTheDocument();
  expect(screen.queryByText('Must be a valid email address.')).toBeInTheDocument();
  expect(screen.queryByText('Password must be at least 9 characters and contain a number, an uppercase letter and a lowercase letter.')).toBeInTheDocument();

  userEvent.type(screen.getByLabelText('name:'), 'test name');
  userEvent.type(screen.getByLabelText('email:'), 'test@email.com');
  userEvent.type(screen.getByLabelText('password:'), 'TestPassword123');

  expect(screen.queryByText('Name cannot be empty.')).not.toBeInTheDocument();
  expect(screen.queryByText('Must be a valid email address.')).not.toBeInTheDocument();
  expect(screen.queryByText('Password must be at least 9 characters and contain a number, an uppercase letter and a lowercase letter.')).not.toBeInTheDocument();
});

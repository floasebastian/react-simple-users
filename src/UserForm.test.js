import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('The component shows two inputs and a button', () => {
    // Render the "Fake" component
    render(<UserForm />);
    // Manipulate the commponent: find the elements
    // 2 textboxes 1 button
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    // Assertion - make sure the component is doing what we expect
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

});
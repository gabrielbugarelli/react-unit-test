import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './';

describe('Test button component', () => {
    it('should render button component with text "Load more"', () => {
        render(<Button text="Load more" />);

        expect.assertions(1);
        const button = screen.getByRole('button', {name: 'Load more'})

        expect(button).toBeInTheDocument();
    });

    it('should call', () => {
        const fn = jest.fn();
        render(<Button text='Load more' onClick={fn} />);

        const button = screen.getByRole('button', {name: 'Load more'});
        userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should button is disabled', () => {
        render(<Button text="Load more" disabled/>)
        const button = screen.getByRole('button', {name: 'Load more'});

        expect(button).toBeDisabled();
    })

    it('should button is enabled', () => {
        render(<Button text="Load more" disabled={false}/>);
        const button = screen.getByRole('button', {name: 'Load more'});

        expect(button).toBeEnabled();
    })
})
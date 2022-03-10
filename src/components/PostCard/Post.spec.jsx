import { render, screen } from '@testing-library/react';
import { PostCard } from './';

import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('Test PostCard component', () => {
    it('should render PostCard', () => {
        render(<PostCard {...props} />);
        const isImg = screen.getByRole('img', {name: props.title});

        expect(isImg).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props}/>);
        const snapShot = container.firstChild;

        expect(snapShot).toMatchSnapshot();
    })
})
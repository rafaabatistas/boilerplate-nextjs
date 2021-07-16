import { render, screen } from '@testing-library/react';

import Main from './Main';

describe('<Main />', () => {
  it('Deve renderizar o componente <Main />', () => {
    const { container } = render(<Main />);
    const Heading = screen.getByRole('heading', { name: 'React' });

    expect(Heading).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

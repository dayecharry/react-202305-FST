import { fireEvent, render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('[Logo] -componente', () => {
  it('Render image with alt = "logo"', () => {
    render(<Logo />);
    const image = screen.getByAltText('logo');

    expect(image).toBeInTheDocument();
  });

  it('Find Word "principal" ', () => {
    const text = 'principal';
    render(<Logo />);
    expect(screen.getByText(text, { exact: false })).toBeInTheDocument();
  });

  it('Execute function received', () => {
    const functionHello = jest.fn();
    render(<Logo printHello={functionHello} />);
    const button = screen.getByTestId('button-click-hello');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(functionHello).toHaveBeenCalledTimes(2);
  });

  it('render subtitulo <h2>', () => {
    render(<Logo />);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveTextContent('Este es Subtitulo del componente logo');
  });
});

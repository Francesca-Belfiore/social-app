import { render, screen } from '@testing-library/react';
import Footer from "./index.jsx"

test('renders and checks the <Footer /> component', () => {
  render(<Footer />);
  const year = new Date().getFullYear();
  const msg = screen.getByText(`Copyright FB ${year}`);
  expect(msg).toBeInTheDocument();
});
//è buona pratica sviluppare iniziando dal test

test("checks markup in <Footer /> component", () => {
    const { container } = render(<Footer/>);
    const footer = container.querySelector("footer");
    const p = container.querySelector("footer p");
    const hr = container.querySelector("footer hr");

    expect(footer).toBeTruthy();
    expect(p).toBeTruthy();
    expect(hr).toBeTruthy();
    //va bene truthy perché non ci interessa testare
    //il contenuto del tag ma solo se il tag esiste
});
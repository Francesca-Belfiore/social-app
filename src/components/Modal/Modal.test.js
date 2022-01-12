import { render, screen } from '@testing-library/react';
import Modal from "./index.jsx"

test("checks markup in <Modal /> component", () => {
    const { container } = render(<Modal/>);
    const p = container.querySelector("p");

    expect(p).toBeTruthy();
});
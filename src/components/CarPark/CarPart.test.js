import { render, screen } from '@testing-library/react';
import CarPark from "./CarPark";

test('renders headers', () => {
    render(<CarPark />);
    expect(screen.getByText(/Index/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Current/i)).toBeInTheDocument();
});
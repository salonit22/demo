import { render,screen } from "@testing-library/react"
import About from "../About";
import "@testing-library/jest-dom";



  test('renders heading and subheading text', () => {
    render(<About />);
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/Swiggy is a new-age consumer-first/i)).toBeInTheDocument();
  });

  it('renders all 5 images', () => {
    render(<About />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(5);
  });

  test('renders specific alt text', () => {
    render(<About />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
    expect(screen.getByAltText('Image 4')).toBeInTheDocument();
    expect(screen.getByAltText('Image 5')).toBeInTheDocument();
  });


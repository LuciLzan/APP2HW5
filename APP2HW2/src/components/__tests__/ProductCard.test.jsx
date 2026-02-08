
import {fireEvent, render, screen} from "@testing-library/react";
import ProductCard from "../ProductCard.jsx";
import {BrowserRouter} from "react-router-dom";

describe('Product Card', () => {
    test('renders without crashing and displays as expected', () => {
        let product = {
            id: 1,
            name: "Test name",
            description: "Test description",
            price: 10,
            image: "https://placehold.co/600x400"
        }
        const mockFn = vi.fn()
        renderWithRouter(
            <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                onClick={mockFn}
            ></ProductCard>
        );

        expect(screen.getByText(product.name)).toBeInTheDocument()
        expect(screen.getByText(product.description)).toBeInTheDocument()
        expect(screen.getByText(product.price)).toBeInTheDocument()
        expect(screen.getByText("Add to Cart")).toBeInTheDocument()

        const deleteButton = screen.getByRole('button', { name: /Add to Cart/i });
        fireEvent.click(deleteButton);

        expect(mockFn).toHaveBeenCalledTimes(1);

    });
});

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};
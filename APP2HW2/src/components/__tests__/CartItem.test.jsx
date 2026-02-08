
import {fireEvent, render, screen} from "@testing-library/react";
import ProductCard from "../ProductCard.jsx";
import {BrowserRouter} from "react-router-dom";
import {CartItem} from "../CartItem.jsx";

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
            <CartItem
                name={product.name}
                price={product.price}
                onClick={mockFn}
            ></CartItem>
        );

        expect(screen.getByText(product.name)).toBeInTheDocument()
        expect(screen.getByText(product.price)).toBeInTheDocument()
        expect(screen.getByText("Remove")).toBeInTheDocument()

        const deleteButton = screen.getByRole('button', { name: /Remove/i });
        fireEvent.click(deleteButton);

        expect(mockFn).toHaveBeenCalledTimes(1);

    });
});

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
}
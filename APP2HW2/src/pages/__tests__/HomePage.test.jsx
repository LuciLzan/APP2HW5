import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {HomePage} from "../HomePage.jsx";

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HomePage', () => {
    test('renders without crashing', () => {
        renderWithRouter(
            <HomePage/>
        );

        expect(screen.getByText("Why Shop with Us?")).toBeInTheDocument();
        expect(screen.getByText("Component corner offers the best of components in the whole world! Take a look at our great variety in our store!")).toBeInTheDocument();
    });

});
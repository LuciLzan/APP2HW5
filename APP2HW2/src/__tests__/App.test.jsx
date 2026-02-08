import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

// Mock localStorage
const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
};
global.localStorage = localStorageMock;

describe('App localStorage Integration', () => {
    beforeEach(() => {
        // Clear all mock calls before each test
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
        localStorageMock.removeItem.mockClear();
        localStorageMock.clear.mockClear();
    });

    describe("Test App", () => {
        test('loads posts from localStorage on component mount', () => {
            // Arrange - set up what localStorage should return
            const cart = JSON.stringify([1]);
            localStorageMock.getItem.mockReturnValue(cart);

            // Act - render the component
            render(<App />);

            // Assert - verify localStorage was checked
            expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
        });

        test('persists cart across component remounts', async () => {
            // Initial render with empty localStorage
            localStorageMock.getItem.mockReturnValue('[]');

            const { unmount } = render(<App />);

            // Simulate  being added (this would trigger useEffect)
            const testItems = [1,2];

            // Verify save happened
            await waitFor(() => {
                expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
            });

            // Unmount component  (simulate closing a browser tab)
            unmount();

            // Mock localStorage returning the saved data
            localStorageMock.getItem.mockReturnValue(JSON.stringify(testItems));

            // Re-render component (simulating user openning the app again)
            render(<App />);

            // Verify data was loaded
            expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
        });
    })

});
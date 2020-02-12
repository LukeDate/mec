import React from 'react';
import SearchResults from '../components/searchResults';
import { render } from '@testing-library/react';


describe('renders results', () => {
    const results = render(<SearchResults />)
    expect(results).toMatchSnapshot();
})
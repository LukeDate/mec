import React from 'react';
import SearchResults from './components/searchResults';
import {SearchStore} from './mobx/store';
import { render } from '@testing-library/react';


describe('renders results', () => {
    const store = new SearchStore();
    store.getSearchData('Bike');
    expect(store.searchData.length).toBe(40);
    const results = render(<SearchResults />)
    expect(results).toMatchSnapshot();
})
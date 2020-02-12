import React, { useState } from 'react';
import Search from './search';
import Tile from './tile';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

const Results = styled('div')`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: space-between;
`;

const SearchResults = ({ ...props }) => {
    const [query, setSearchQuery] = useState('');
    const [results, setSearchResults] = useState([])
    const [resultQuery, setResultQuery] = useState();
    
    const handleSearch = async (e) => {
        if(e.key === "Enter") {
            await props.searchStore.getSearchData(query);
            setSearchResults(toJS(props.searchStore.searchData));
            setResultQuery(query);
        } else {
            await props.searchStore.getSearchData(query);
            setSearchResults(toJS(props.searchStore.searchData));
            setResultQuery(query);
        }
    }
    return (
        <>
            <Search 
                setSearchQuery={setSearchQuery} 
                handleSearch={handleSearch}
                resultQuery={resultQuery}
            />
            <Results>
                {
                    results ? <Tile data={results} /> : 'No results, please search again'
                }
            </Results>
        </>
    )
}

export default inject("searchStore")(observer(SearchResults));

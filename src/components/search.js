import React from 'react';
import styled from 'styled-components';

const Wrap = styled('div')`
    justify-content: center;
    display: flex;
    height: 100px;
    align-items: center;
    margin: 0 0 20px 0;
`;

const Input = styled('input')`
    height: 30px;
`;

const Result = styled('div')`
    position: absolute;
    left: 25px;
    top: 81px;
`;

const Search = ({setSearchQuery, handleSearch, resultQuery}) => {
    return (
        <Wrap>
            <Input onChange={(e) => setSearchQuery(e.target.value)} />
            <button onClick={(e) => handleSearch(e)}>Search</button>
            <Result>Search results for: {resultQuery}</Result>
        </Wrap>
    )
}

export default Search;
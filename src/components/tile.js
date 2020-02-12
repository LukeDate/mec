import React from 'react';
import styled from 'styled-components';

const Wrap = styled('div')`
    width: 32%;
    padding: 0 0 20px 0;
`;

const Image = styled('img')`
    width: 32%;
`;

const Name = styled('div')``;

const Tile = ({data}) => {
    return (
        data.map(i => 
            <Wrap>
                <Name>
                {i.name}
                </Name>
                <Image src={i.default_image_urls.main_image_url}/>
            </Wrap>
        )
    )
}

export default Tile;
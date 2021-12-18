
import styled from 'styled-components';

export const LeftSideBar = styled.div `
    div:first-child {
        background: linear-gradient(180deg, #19AF31 0%, #0B5517 93.75%);
        width: 70px;
    }
`;

export const ActiveIcon = styled.div`
    ul:first-child li {
        background: #FFFFFF;
        border-radius: 0px 40px 40px 0px;
        transform: rotate(180deg);

        img {
            transform: rotate(180deg);
            left: 7px;
            position: relative;
        }
    }
`;



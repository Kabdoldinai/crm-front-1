import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 4rem;
  
`;

export const Container = styled.div`
 margin-top: 28px;
 ul {
    list-style: none;
    display: flex;
    padding: 0; 
    color: #6B8795;
    font-size: 12px;
    cursor: pointer;
    span {
    margin: 0 4px 0 4px;
    font-weight: normal;
    }
 }
`;
export const MainHeader = styled.div`
    font-family: 'Monsterrat';
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: #062A3D;
`;



export const SubHeader = styled.ul`
    color: #C6D8E1;
    cursor: pointer;
    line-height: 36px;
    
    span {
    margin: 0 22px 0 4px !important;
    }
    a {
    font-size: 14px;
    text-decoration: none;
    position: relative;
    font-weight: 500;
    }
    a:after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -4px;
    border-width: 0 0 1px;
    border: 1px solid #C6D8E1;
    border-style: solid;
    border-radius: 4px;
    }
    
    
    a:visited { color: #1EA133 }
    a:focus { color: #1EA133 }
    a:active { color: #1EA133 }
  
    
`;



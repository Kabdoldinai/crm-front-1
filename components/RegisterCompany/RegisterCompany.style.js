import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-left: 4rem;
  
`;

export const Container = styled.div`
    display: flex; 
    justify-content: space-evenly;
`;

export const LogoContainer = styled.div`
 margin-top: 28px;
 
 img {
     border-radius: 50%;
 }
 p {
    font-size: 14px;
    color: #6B8795;
    text-align: center;
    
 }
  button {
     position: absolute;
     width: 37px;
     height: 37px;
     border: none;
     cursor: pointer;
     background:url("../../../assets/icons/circledPlus.svg") 0px 0px no-repeat
 }
`;

export const ContainerForImg = styled.div`
 position: relative;
`;

export const Form = styled.div`
 margin-top: 28px;
 margin-left: 7rem;
 
 .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 557px;
    height: 37px;
    color: #C6D8E1;
    font-weight: 400;
    font-size: 14px;
    font-family: Montserrat;
    border: #EFF1F5;
    margin-bottom: 30px;
 }
 .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
 border-color: #EFF1F5;
 }
 .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
      font-weight: 400;
      font-size: 14px;
      color: #C6D8E1;
      font-family: Montserrat;
 }
 .MuiSelect-icon {
 color: #C6D8E1;
 }
 
`;

export const Label = styled.div`
 margin-bottom: 10px;
 color: #6B8795;
 font-size: 12px;
 font-weight: normal;
`;

export const ContainerForContacts = styled.div`
   
 .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root { 
    width: 265px;
    height: 37px;
 }
 
 div {
    display: flex;
 }
 
  button {
     margin-left: 20px;
     width: 37px;
     height: 37px;
     border: none;
     cursor: pointer;
     background:url("../../../assets/icons/circledPlus.svg") 0px 0px no-repeat
 }

`;

export const Flex = styled.div`
   display: flex; 
   div {
   display: block;
   }
   .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
        padding: 8.5px 14px;
   }
`;

export const SiteAdress = styled.div`
   margin-left: 24px;
`;

export const SaveAndCancelBtn = styled.div`
    
    button {
    font-family: Montserrat;
    cursor: pointer;
    font-weight: 200;
    font-size: 14px;
    border-radius: 4px;
    }
  
   .save {
    padding: 10px;
    color: #FFFFFF;
    background: #1EA133;
    width: 151px;
    border: none;
   }
   
   .cancel {
   padding: 8px;
   color: #1EA133;
   border: 1px solid #1EA133;
   width: 108px;
   background: none;
   margin-left: 22px;
   
   }
`;






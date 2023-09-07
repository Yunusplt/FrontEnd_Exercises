import styled from 'styled-components';

const ButtonStyle = styled.button`
background-color: orange;
color: blue;
cursor: pointer;
padding: 1rem 1.5rem;

border-radius: 5px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 30px;
font-weight: bold;
&:hover{
    transform: scale(0.95);
}

`;

//! export const RedButton = styled.button``    normali bu. ama biz inherit seklinde yapacagiz
export const RedButton = styled(ButtonStyle)`
color: green;
background-color: ${({blocked})=>blocked? "black" : "aquamarine"};
border: 5px solid red;
&:hover{
    transform: scale(1.05);
}
` 

export default ButtonStyle;

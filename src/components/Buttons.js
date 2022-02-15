import styled from "styled-components";

export const LinkButton = styled.span`
color:inherit;
cursor:pointer;
border-bottom: ${({ selectButton,theme }) => selectButton ? '1px solid black' : 'none'}   ;
border-color:${({ theme }) =>theme === 'Dark' ? 'white' : 'black'};
`

const Button = styled.button`
  width:170px;
  font-size: 1em;
  padding:12px;
  border-radius: 4px;
  cursor:pointer;
`;

export const ClearHistoryButton = styled(Button)`
margin-top:15px;
border: 1px solid #a2a2a2;
 background-color:#f2f2f2;

 &:hover{
  background-color:#ebeaea;
 }
 &:active{
  background-color:#d9d8d8;
 }
`;
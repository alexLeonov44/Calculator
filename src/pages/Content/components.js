import HeaderComponent from '@/components/Header'
import styled from 'styled-components'

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
`
export const ControlPanelWrapper = styled.div`
  padding: 15px;
  @media (min-width: 729px) {
    display: Flex;
    flex-wrap: wrap;
  }
  @media (max-width: 465px) {
    height: 93.0vh;
    width: 100vw;
    padding: 5px;
  }
`
export const HeaderComponentWrapper = styled.div`
  width: 100%;
  height: 60px;
  color: ${({ theme, color }) =>
    color === 'Dark' ? 'white' : 'black'};
  background-color: ${({ theme, color }) =>
    theme.colors[color]};
  padding: 20px;
  display: flex;
`
export const SettingsWrapper = styled.div`
  height: 46.3vh;
  display: flex;
  flex-direction: column;
  padding: 30px;

  & p {
    font-weight: 100;
    font-size: 1.6em;
  }

  @media (min-width: 729px) {
    width:728px;
  }
  @media (max-width: 729px) {
    height:500px;
    width:467px;
  }

  @media (max-width: 465px) {
    height: 93.0vh;
    width: 100vw;
  }
`

export const DisplayWrapper = styled.div`
  max-width: 430px;
  overflow: hidden;
  text-align: right;
  height: 45px;
`
export const DisplayResult = styled.span`
  padding-top: 10px;
  font-size: 1.5em;
`
export const KeyPadWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rowss: minmax(60px, auto);
  border-top: 1px solid #b7b4b4;

  @media (max-width: 465px) {
    padding-top: 10px;
  }
`
export const Key = styled.span`
  margin: 10px;
  padding: 20px 15px;
  border: 1px solid #c3c3c3;
  background-color: #f2f2f2;
  border-radius: 17px;
  font-weight: 100;
  font-size: 1.6em;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #e3e1e1;
    border: 1px solid #c5c2c2;
  }
  &:active {
    background-color: #cbc9c9;
    border: 1px solid #b5b4b4;
  }

  @media (max-width: 465px) {
    margin: 5px;
    padding: 15px;
  }
`
export const History = styled.div`
  overflow-y: scroll;
  & ::-webkit-scrollbar {
    width: 3px;
    background-color: #f9f9fd;
  }
  & ::-webkit-scrollbar-thumb {
    background-color: #c5c2c2;
  }
  @media (min-width: 729px) {
    width: 250px;
    max-height: 445px;
    margin-left: 10px;
    padding-left: 20px;
    border-left: 1px solid #b7b4b4;
  }
  @media (max-width: 729px) {
    max-height: 28vh;
    width: 100%;
    border-top: 1px solid #b7b4b4;
    padding-top: 15px;
    margin-top: 15px;
  }

  @media (max-width: 465px) {
    max-height: 50vh;
    width: 100%;
  }
`

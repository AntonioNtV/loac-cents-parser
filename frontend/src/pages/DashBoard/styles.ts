import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CentsShow = styled.div`
display: flex;
  font-size: 200px;
  color: #298eb0;
`
const Logo = styled.img`
  height: 100px;
  width: 100px;
  align-items: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 50px;
  color: #3a3a3a;
  max-width: 600px;
  line-height: 56px;
  margin-top: 80px;
  text-align: center;
`;

const Form = styled.form<FormProps>`
  margin-top: 40px;
  margin-bottom: 150px;
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  input {
    flex: 1;
    height: 70px;
    width: 700;
    padding: 0 20px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #FFF;
    border-right: 0;
    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}
    &::placeholder {
      color: #a8a8b3
    }
  }
  button {
    min-width: 350px;
    height: 70px;
    background-color: #298eb0;
    border: 0;
    border-radius: 5px;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.1, '#298eb0')}
    }
  }
`;


const Error = styled.span`
  display: block;
  color: #c43030;
  margin-top: 30px
`;

export {
  Title, Form, Container, Error, CentsShow, Logo
};

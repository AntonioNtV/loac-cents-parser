import React, { useState, FormEvent } from 'react';
import {
  Title, Form, Error, Container, CentsShow, Logo,
} from './styles';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

interface Student {
  code: string;
  cents: number;
}

const Dashboard: React.FC = () => {
  const [code, setCode] = useState('');
  const [cents, setCents] = useState<number | null>(null);
  const [inputError, setInputError] = useState('');

  async function handleGetCents(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();


    try {
      const response = await api.get(`/students/${code}`)
      console.log(response);
      const student: Student = response.data;


      if (!student) {
        setInputError("Código não existe, sua mula! Digite novamente")
        setCents(null)
        return;
      }
      setCents(student.cents);
      setInputError('')

    } catch (error) {
      setInputError('Código não existe, sua mula! Digite novamente')
    }

  }

  return (
    <>
      <Container>
        <Logo src={logoImg} alt="github explorer" />
        <Title>Quantos centavos você tem em LOAC?</Title>

        <Form
          hasError={!!inputError}
          onSubmit={handleGetCents}
        >
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Digite seu código único:"
          />
          <button type="submit">Pesquisar</button>
        </Form>

        { inputError && <Error>{inputError}</Error>}
      <CentsShow>{cents}</CentsShow>
      { cents ? <Title>Centavos</Title> : null }
      </Container>
    </>
  );
};

export default Dashboard;

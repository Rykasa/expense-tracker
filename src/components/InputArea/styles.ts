import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  border: 1px solid #387780;
  background-color: #fff;
  margin-inline: auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`;

export const InputTitle = styled.h4`
  color: #28262C;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  height: 25px;
  outline-color: #387780;
`;

export const Select = styled.select`
  height: 25px;
`;

export const Button = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: flex-end;
  padding: 3px 10px;
  background-color: #387780;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  /* border: 1px solid #F97068; */
`;
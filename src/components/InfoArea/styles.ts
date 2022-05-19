import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #387780;

  margin-inline: auto;
  padding: 15px;
  margin-top: -35px;
  margin-bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
`;

export const Arrow = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #387780;
  cursor: pointer;
  height: 35px;
`;

export const DateTitle = styled.div`
  color: #28262C;
  text-transform: uppercase;
  letter-spacing: .5px;
`;

export const Infos = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-evenly;
`;


export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const InfoTitle = styled.h3`
  color: #F97068;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
`;

export const InfoValue = styled.span<{ color?: string}>`
  font-weight: 500;
  color: ${props => props.color ? props.color : '#28262C'};
  font-size: 18px;
`;
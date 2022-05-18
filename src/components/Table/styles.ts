import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  padding: 0 5px;
  margin-inline: auto;
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  margin-top: -15px;
  background-color: #fff;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHeading = styled.th<{ width?: number }>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  text-align: left;
  text-transform: uppercase;
  color: #28262C;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 10px 0;
`
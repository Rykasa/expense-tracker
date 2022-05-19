import styled from "styled-components";

export const TableLine = styled.td`
  padding: 5px 0;
  color: #28262C;
  font-weight: 500;
`;

export const Category = styled.div<{ color: string }>`
  width: fit-content;
  padding: 4px 6px;
  border-radius: 4px;
  background-color: ${props => props.color};
  color: #fff;
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color}
`;
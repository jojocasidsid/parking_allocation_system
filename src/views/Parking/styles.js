import styled from '@emotion/styled';

export const SlotsWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
`;

export const ActionWrapper = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

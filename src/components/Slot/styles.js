import styled from '@emotion/styled';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const ThumbnailWrapper = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

export const ActionWrapper = styled('div')`
  & > button {
    margin: 20px;
  }
`;

export const StyledImage = styled(DirectionsCarIcon)`
  font-size: 100px;
`;

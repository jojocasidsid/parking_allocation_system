import React from 'react';
import { Button } from '@mui/material';

import { ActionWrapper } from './styles';

const ActionButtons = ({ handleParking }) => (
  <>
    <ActionWrapper>
      <Button
        variant="contained"
        onClick={() => {
          handleParking(1, 'exitA');
        }}>
        Park to Entry A Small (center east)
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          handleParking(1, 'exitB');
        }}>
        Park to Entry B Small (center west)
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          handleParking(1, 'exitC');
        }}>
        Park to Entry C Small (center south)
      </Button>
    </ActionWrapper>
    <ActionWrapper>
      <Button
        variant="outlined"
        onClick={() => {
          handleParking(2, 'exitA');
        }}>
        Park to Entry A Medium (center east)
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          handleParking(2, 'exitB');
        }}>
        Park to Entry B Medium (center west)
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          handleParking(2, 'exitC');
        }}>
        Park to Entry C Medium (center south)
      </Button>
    </ActionWrapper>
    <ActionWrapper>
      <Button
        variant="contained"
        onClick={() => {
          handleParking(3, 'exitA');
        }}>
        Park to Entry A Large (center east)
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          handleParking(3, 'exitB');
        }}>
        Park to Entry B Large (center west)
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          handleParking(3, 'exitC');
        }}>
        Park to Entry C Large (center south)
      </Button>
    </ActionWrapper>
  </>
);

export default ActionButtons;

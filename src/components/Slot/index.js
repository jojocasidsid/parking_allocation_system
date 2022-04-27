import React, { useState, useEffect } from 'react';

import { Button, Typography } from '@mui/material';
import numbertToType from 'helpers/numberToType';
import moment from 'moment';
import { ThumbnailWrapper, ActionWrapper, StyledImage } from './styles';

const Slot = ({ data, handleLeave }) => {
  const [timeDiff, setTimeDiff] = useState(null);

  useEffect(() => {
    if (data.dateParked || data.dateTime) {
      const dateParked = moment(data.dateTime);
      const dateNow = moment();
      const timeBetween = moment.duration(dateNow.diff(dateParked));

      setTimeDiff(Math.ceil(timeBetween.asHours()));
    }
  }, [data]);

  return (
    <ThumbnailWrapper>
      <div>
        <StyledImage color="primary" />
      </div>
      <Typography variant="body">
        Slot: {data.parked ? `Type ${numbertToType(data.parked)} vehicle is parked` : 'Available'}
      </Typography>

      <Typography variant="body">Parking Type: {numbertToType(data.type)} </Typography>

      <Typography variant="body">Exit A: {data.exitA} units</Typography>
      <Typography variant="body">Exit B: {data.exitB} units</Typography>
      <Typography variant="body">Exit C: {data.exitC} units</Typography>

      {data.parked ? (
        <>
          <Typography variant="body">Hours {timeDiff}</Typography>
          <Typography variant="body">
            Date Time: {moment(data.dateTime).format('YYYY-MM-DD HH:mm:ss')}{' '}
          </Typography>
        </>
      ) : (
        <div />
      )}

      <ActionWrapper>
        {data.parked ? (
          <Button variant="contained" onClick={() => handleLeave(data.id)}>
            Leave
          </Button>
        ) : (
          <div />
        )}
      </ActionWrapper>
    </ThumbnailWrapper>
  );
};

export default Slot;

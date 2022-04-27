import React, { useState } from 'react';

import { useQuery } from 'react-query';
import { useSnackbar } from 'notistack';
import { Typography } from '@mui/material';
import moment from 'moment';

// api
import SlotsAPI from 'apis/SlotsApi';
import EarningsApi from 'apis/EarningsApi';

// helpers
import numbertToType from 'helpers/numberToType';
import computeTransaction from 'helpers/computeTransaction';
import getSumByKey from 'helpers/getSumByKey';

// components
import PromptModal from 'components/PromptModal';
import Slot from 'components/Slot';
import LoadingIndicator from 'components/LoadingIndicator';
import ActionButtons from './components/ActionButtons';

// styles
import { SlotsWrapper } from './styles';

const Parking = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { isLoading, data, refetch } = useQuery(['slot'], () => SlotsAPI.list(), {
    refetchOnWindowFocus: true,
    refetchOnMount: true
  });

  const {
    isLoading: loadingEarnings,
    data: earningsData,
    refetch: earningsRefetch
  } = useQuery(['earnings'], () => EarningsApi.list(), {
    refetchOnWindowFocus: true,
    refetchOnMount: true
  });

  const [open, setOpen] = useState(false);
  const [awaitingDeleteResponse, setAwaitingDeleteResponse] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const handleLeave = (id) => {
    setOpen(true);
    setDeleteTargetId(id);
  };

  const handleCloseModal = () => {
    if (!awaitingDeleteResponse) {
      setOpen(false);
      setDeleteTargetId(null);
    }
  };

  const onConfirmLeave = async () => {
    setAwaitingDeleteResponse(true);
    try {
      const result = data.find((row) => row.id === deleteTargetId);

      const dateParked = moment(result.dateTime);
      const dateNow = moment();
      const timeBetween = moment.duration(dateNow.diff(dateParked));

      const timeDifferenceinHours = Math.ceil(timeBetween.asHours());

      const fee = computeTransaction(timeDifferenceinHours, result.parked);

      await EarningsApi.add({
        price: fee,
        hours: timeDifferenceinHours,
        transactionDate: moment()
      });

      await SlotsAPI.leaveSlot(deleteTargetId);

      enqueueSnackbar('Transaction Completed', {
        variant: 'success'
      });

      earningsRefetch();
      refetch();
    } catch (error) {
      console.log(error);
      enqueueSnackbar('Something went wrong', {
        variant: 'error'
      });
    }

    setAwaitingDeleteResponse(false);
    setOpen(false);
  };

  const [openPark, setOpenPark] = useState(false);
  const [vehicleType, setVehicleType] = useState(null);
  const [entryPoint, setEntryPoint] = useState(null);

  const handleParking = (type, entry) => {
    setEntryPoint(entry);
    setVehicleType(type);
    setOpenPark(true);
  };

  const handleParkingCloseModal = () => {
    if (!awaitingDeleteResponse) {
      setOpenPark(false);
      setEntryPoint(null);
      setVehicleType(null);
    }
  };

  const onConfirParking = async () => {
    setAwaitingDeleteResponse(true);
    try {
      const getParking = await SlotsAPI.getNearestParking(vehicleType, entryPoint);

      if (!getParking) {
        throw new Error('There is no available slot');
      }

      await SlotsAPI.parkSlot(getParking[0].id, vehicleType);

      enqueueSnackbar('Vehicle has been successfully parked.', {
        variant: 'success'
      });

      refetch();
    } catch (error) {
      enqueueSnackbar('Something went wrong', {
        variant: 'error'
      });
    }

    setAwaitingDeleteResponse(false);
    setOpenPark(false);
  };
  if (isLoading || loadingEarnings) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <PromptModal
        title="Leave"
        message="Are you sure you want to tag this slot as available?"
        open={open}
        processing={awaitingDeleteResponse}
        handleClose={handleCloseModal}
        handleConfirm={onConfirmLeave}
        paperProps={{ sx: { width: '300px', height: '230px' } }}
      />

      <PromptModal
        title="Park"
        message={`Are you sure you want to park this ${numbertToType(
          vehicleType
        )} vehicle near to ${entryPoint}`}
        open={openPark}
        processing={awaitingDeleteResponse}
        handleClose={handleParkingCloseModal}
        handleConfirm={onConfirParking}
        paperProps={{ sx: { width: '300px', height: '230px' } }}
      />

      <Typography variant="h1">Earnings: {getSumByKey(earningsData, 'price')} </Typography>

      <ActionButtons handleParking={handleParking} />

      <SlotsWrapper>
        {data.map((row, key) => (
          <Slot key={key} data={row} handleLeave={(id) => handleLeave(id)} />
        ))}
      </SlotsWrapper>

      <ActionButtons handleParking={handleParking} />
    </>
  );
};

export default Parking;

import React from 'react';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { InputAdornment } from '@mui/material';

import { StyledInput, StyledLabel, StyledRoot } from './styles';

const MaskedInput = ({
  control,
  defaultValue,
  error,
  label,
  name,
  disabled,
  noController = false,
  required = false,
  placeholder,
  fullWidth,
  type,
  startIcon,
  endIcon,
  multiline,
  rows,
  small,
  maxLength,
  mask,
  maskPlaceholder
}) =>
  noController ? (
    <StyledRoot>
      {label && (
        <StyledLabel htmlFor={name} error={Boolean(error)}>
          {label} <span>{required && '*'}</span>
        </StyledLabel>
      )}
      <StyledInput
        id={name}
        name={name}
        error={Boolean(error)}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={type}
        size="small"
        helperText=""
        fullWidth={fullWidth}
        disabled={disabled}
        inputProps={{
          maxLength
        }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: endIcon && <InputAdornment position="start">{endIcon}</InputAdornment>
        }}
        multiline={multiline}
        rows={rows}
        hiddenLabel
      />
    </StyledRoot>
  ) : (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <StyledRoot>
          {label && (
            <StyledLabel htmlFor={name} error={Boolean(error)}>
              {label} <span>{required && '*'}</span>
            </StyledLabel>
          )}
          <InputMask
            mask={mask}
            maskPlaceholder={maskPlaceholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            <StyledInput
              id={name}
              name={name}
              type={type}
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              error={Boolean(error)}
              helperText={error}
              fullWidth={fullWidth}
              small={Boolean(small)}
              inputProps={{
                maxLength
              }}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              InputProps={{
                startAdornment: startIcon && (
                  <InputAdornment position="start">{startIcon}</InputAdornment>
                ),
                endAdornment: endIcon && <InputAdornment position="start">{endIcon}</InputAdornment>
              }}
              multiline={multiline}
              rows={rows}
            />
          </InputMask>
        </StyledRoot>
      )}
      defaultValue={defaultValue}
    />
  );

export default MaskedInput;

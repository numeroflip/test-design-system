import * as React from 'react';
import { PhoneInputProps } from 'react-phone-input-2';
import { Input } from './Input';
import { InputLabel } from './InputLabel';
import { FormControl, FormInputBaseProps } from './FormControl';
import { FormHelperText } from './FormHelperText';
import { PhoneInput } from './PhoneInput';

export default {
  title: 'Form',
  component: FormControl,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Base = ({ disabled, error, required }: FormInputBaseProps) => (
  <FormControl disabled={disabled} error={error} required={required}>
    <InputLabel htmlFor="test">Company</InputLabel>
    <Input type="text" name="test" id="test" placeholder="Company" />
    <FormHelperText>
      {error ? 'Error Message' : 'Assistive text'}
    </FormHelperText>
  </FormControl>
);

export const Phone = ({
  disabled,
  error,
  required,
  preferredCountries = ['de', 'at', 'ch', 'gb', 'dk'],
  country = 'de',
  placeholder = '+49 30 568 37200',
}: FormInputBaseProps & Partial<PhoneInputProps>) => (
  <FormControl disabled={disabled} error={error} required={required}>
    <InputLabel htmlFor="test">Phone</InputLabel>
    <PhoneInput
      preferredCountries={preferredCountries}
      country={country}
      placeholder={placeholder}
    />
    <FormHelperText>
      {error ? 'Error Message' : 'Assistive text'}
    </FormHelperText>
  </FormControl>
);

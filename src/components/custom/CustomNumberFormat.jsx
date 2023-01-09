import React, { forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';
import PropTypes from 'prop-types';

export const CustomNumberFormat = forwardRef(function CustomNumberFormat(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      decimalScale={0.1}
      decimalSeparator="."
    />
  );
});

CustomNumberFormat.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

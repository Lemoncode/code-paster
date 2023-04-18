import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { languageFormat } from '../trainer.constants';

interface Props {
  onChange: (value: string) => void;
  value: string;
}

export const SelectComponent: React.FC<Props> = (props) => {
  const { onChange, value } = props;

  const handleSelectChange = (event) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="select">Language</InputLabel>
      <Select
        id="select"
        label="Language"
        value={value}
        onChange={handleSelectChange}
      >
        {languageFormat.map((language) => (
          <MenuItem key={language.id} value={language.id}>
            {language.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

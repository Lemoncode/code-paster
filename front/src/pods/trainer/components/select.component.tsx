import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';

export const SelectComponent = () => {
  const [lang, setLang] = useState('');

  const handleSelectChange = event => {
    setLang(event.target.value as string);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-lang-native-simple">Language</InputLabel>
      <Select
        label="Language"
        value={lang}
        onChange={handleSelectChange}
      >
        <MenuItem aria-label="None" value="" />
        <MenuItem value="HTML">HTML</MenuItem>
        <MenuItem value="CSS">CSS</MenuItem>
        <MenuItem value="JS">JS</MenuItem>
        <MenuItem value="JSX">JSX</MenuItem>
        <MenuItem value="TS">TS</MenuItem>
        <MenuItem value="TSX">TSX</MenuItem>
        <MenuItem value="JSON">JSON</MenuItem>
        <MenuItem value="Bash">Bash</MenuItem>
        <MenuItem value="Markdown">Markdown</MenuItem>
        <MenuItem value="YAML">YAML</MenuItem>
        <MenuItem value="Diff">Diff</MenuItem>
        <MenuItem value="C#">C#</MenuItem>
      </Select>
    </FormControl>
  );
};

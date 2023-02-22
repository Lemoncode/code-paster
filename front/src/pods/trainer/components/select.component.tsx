import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
        <option aria-label="None" value="" />
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JS">JS</option>
        <option value="JSX">JSX</option>
        <option value="TS">TS</option>
        <option value="TSX">TSX</option>
        <option value="JSON">JSON</option>
        <option value="Bash">Bash</option>
        <option value="Markdown">Markdown</option>
        <option value="YAML">YAML</option>
        <option value="Diff">Diff</option>
        <option value="C#">C#</option>
      </Select>
    </FormControl>
  );
};

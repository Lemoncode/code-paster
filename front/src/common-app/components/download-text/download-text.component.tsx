import React from 'react';
import * as innerClasses from './download-text.styles';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const DownloadTxtFile: React.FC = () => {
  const handleDownloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob(
      [(document.getElementById('session') as HTMLInputElement).value],
      {
        type: 'text/json;charset=utf-8,',
      }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'Codepaster.txt';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Button
      variant="contained"
      className={innerClasses.downloadButton}
      onClick={() => handleDownloadTxtFile()}
    >
      <ArrowDownwardIcon className={innerClasses.downloadIcon} />
      Download File
    </Button>
  );
};


export const handleDownloadSessionContent = (sessionContent: string): void => generateFile(sessionContent);

const generateFile = (txt: string): void => {
  const file: Blob = new Blob([txt], {
    type: 'text/plain;charset=utf-8',
  });
  const element: HTMLAnchorElement = document.createElement('a');
  element.href = URL.createObjectURL(file);
  element.download = generateCodePasterFileName()
  element.click();
}

const generateCodePasterFileName = (): string => {
  const dateToday = new Date(Date.now()).toLocaleDateString();
  return `Codepaster_Session_${dateToday}.txt`;
}
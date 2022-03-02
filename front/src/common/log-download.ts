export const handleDownSessionContent = (sessionContent: string) => {
  const element = document.createElement('a');
  const file = new Blob([sessionContent], {
    type: 'text/plain;charset=utf-8',
  });
  const dateNow = new Date(Date.now()).toLocaleDateString();
  element.href = URL.createObjectURL(file);
  element.download = `Codepaster_Session_${dateNow}.txt`;
  element.click();
};

import ProgressBar from 'react-bootstrap/ProgressBar';
function StatusProgress() {
  const now = 50;
  return (
    <ProgressBar now={now} label={`${now}%`} />
  );
}

export default StatusProgress;

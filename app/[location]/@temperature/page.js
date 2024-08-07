import Temperature from '@/components/Temperature';

const TemperaturePage = ({ searchParams: { latitude, longitude } }) => {
  return <Temperature lat={latitude} lon={longitude} />;
};

export default TemperaturePage;

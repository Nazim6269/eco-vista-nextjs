import AQIComponent from '@/components/AQIComponent';

const AQIpage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <AQIComponent lat={latitude} lon={longitude} />;
};

export default AQIpage;

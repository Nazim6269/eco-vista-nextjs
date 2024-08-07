import LocationData from '@/components/LocationData';

const page = ({ searchParams: { latitude, longitude } }) => {
  return <LocationData lat={latitude} lon={longitude} />;
};

export default page;

import Wind from '@/components/Wind';

const page = ({ searchParams: { latitude, longitude } }) => {
  return <Wind lat={latitude} lon={longitude} />;
};

export default page;

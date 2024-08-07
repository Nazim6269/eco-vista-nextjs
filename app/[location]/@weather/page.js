import Weather from '@/components/Weather';

const WeatherPage = ({ searchParams: { latitude, longitude } }) => {
  return <Weather lat={latitude} lon={longitude} />;
};

export default WeatherPage;

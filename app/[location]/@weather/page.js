import NotFound from '@/components/NotFound';
import Weather from '@/components/Weather';
import { getResolvedLatLong } from '@/helper/locationData';

const AQIpage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const data = await getResolvedLatLong(location, latitude, longitude);
  if (data?.lat && data?.lon) {
    return <Weather lat={data.lat} lon={data.lon} />;
  } else {
    return <NotFound />;
  }
};

export default AQIpage;

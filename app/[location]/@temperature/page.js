import NotFound from '@/components/NotFound';
import Temperature from '@/components/Temperature';
import { getResolvedLatLong } from '@/helper/locationData';

const page = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const data = await getResolvedLatLong(location, latitude, longitude);
  if (data?.lat && data?.lon) {
    return <Temperature lat={data.lat} lon={data.lon} />;
  } else {
    return <NotFound />;
  }
};

export default page;

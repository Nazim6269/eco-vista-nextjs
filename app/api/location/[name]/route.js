import { getLocationByName } from '../locationUtils';

export const GET = async (request, { params }) => {
  const locationData = getLocationByName(params?.name);

  return Response.json(locationData);
};

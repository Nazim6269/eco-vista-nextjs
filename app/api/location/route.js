const { getLocations } = require('./locationUtils');

export const GET = async () => {
  const locationData = getLocations();

  return Response.json(locationData);
};

import API from "../api/api";

// Join Queue
export const joinQueue = async (organizationId) => {
  const { data } = await API.post(`/queue/join/${organizationId}`);
  return data;
};

// Get My Queue
export const getMyQueue = async () => {
  const { data } = await API.get("/queue/myqueue");
  return data;
};

// Leave Queue
export const leaveQueue = async (queueId) => {
  const { data } = await API.delete(`/queue/leave/${queueId}`);
  return data;
};

// Get Queue History
export const getHistory = async () => {
  const { data } = await API.get("/queue/history");
  return data;
};
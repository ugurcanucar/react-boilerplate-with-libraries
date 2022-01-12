const dev = {
  API_ENDPOINT_URL: "localendpoint",
};
const prod = {
  API_ENDPOINT_URL: "apiendpoint",
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    default:
      break;
  }
};

export const env = getEnv();

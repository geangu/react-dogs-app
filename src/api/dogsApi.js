const BASE_API = 'https://dog.ceo/api';

const apiRequest = async method => {
  const endpoint = `${BASE_API}/${method}`;
  const response = await fetch(endpoint);
  const {status, message} = await response.json();
  if (status === 'error') {
    console.log(message);
    return [];
  }
  return message;
};

const DogService = {
  getAllBreeds: async () => {
    let breeds = [];
    const results = await apiRequest('breeds/list/all');
    Object.keys(results).forEach(key => {
      breeds.push(key);
      results[key].forEach(item => {
        breeds.push(`${key}/${item}`);
      });
    });
    return breeds;
  },
  getBreedImage: async breed =>
    await apiRequest(`breed/${breed}/images/random`),
  getDogsByBreed: async breed => await apiRequest(`breed/${breed}/images`),
};

export default DogService;

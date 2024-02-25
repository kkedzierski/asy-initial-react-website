const JsonToArrayDeserializer = (json) => {
  const result = [];

  Object.entries(json).forEach((data) => {
    result.push(data[1]);
  });

  return result;
};

export default JsonToArrayDeserializer;

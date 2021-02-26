/**
 * 创建一个fromData
 * @param param
 */
export const createFormData = param => {
  const formData = new FormData();
  for (let key in param) {
    formData.append(key, param[key]);
  }
  return formData;
};

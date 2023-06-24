import { toast } from 'react-toastify';

export const handleRequest = async (promise, messages) => {
  try {
    toast.promise(promise, messages);
    const response = await promise;
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const handleError = error => {
  console.error(`Error: ${error.message}`, error);
  toast.error(error.message);
  throw new Error(error.message);
};

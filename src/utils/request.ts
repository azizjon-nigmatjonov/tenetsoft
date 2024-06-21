import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryClient } from "react-query";
// import { store, RootState } from "store/store";
// import { logout } from "store/auth/auth.slice";
// import { websiteActions } from "store/website/websiteSlice";

export const request = axios.create({
  baseURL: "https://api.openweathermap.org/",
});

interface ErrorResponse {
  error: {
    code: number;
    message?: string;
  };
}

const errorHandler = (error: AxiosError<ErrorResponse>) => {
  if (error.response) {
    const { data } = error.response;
    if (data.error.code === 401) {
      // store.dispatch(logout());
      window.location.replace("/");
    }
  }

  return Promise.reject(error.response);
};

request.interceptors.request.use(
  (config: any) => {
    // const token = (store.getState() as RootState).auth.token;
    // if (token) {
    //   config.headers = {
    //     ...config.headers,
    //     Authorization: `Bearer ${token}`,
    //   };
    // }
    return config;
  },

  (error: AxiosError) => errorHandler(error as AxiosError<ErrorResponse>)
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data?.error?.message) {
      // store.dispatch(
      //   websiteActions.setAlertData({
      //     title: response.data.error.message,
      //     type: "error",
      //   })
      // );
    }
    return response.data;
  },
  (error: AxiosError) => errorHandler(error as AxiosError<ErrorResponse>)
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

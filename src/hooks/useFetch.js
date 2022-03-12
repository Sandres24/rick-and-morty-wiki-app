import axios from 'axios';
import { useReducer, useEffect } from 'react';
import { TYPES } from '../actions/fetchActions';
import { fetchInitialState, fetchReducer } from '../reducers/fetchReducer';

const useFetch = (url) => {
   const [state, dispatch] = useReducer(fetchReducer, fetchInitialState);

   useEffect(() => {
      if (!url) return;

      let isMounted = true;
      axios
         .get(url)
         .then((res) => {
            if (isMounted)
               dispatch({ type: TYPES.ONSUCCESSFETCH, payload: res.data });
         })
         .catch((err) => {
            if (isMounted) dispatch({ type: TYPES.ONERRORFETCH, payload: err });
         });

      return () => (isMounted = false);
   }, [url]);

   return { state, dispatch };
};

export default useFetch;

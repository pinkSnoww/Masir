import { useMemo } from 'react';

const useApiUrl = () => {
    return useMemo(() => process.env.NEXT_PUBLIC_API_URL, []);
};

export default useApiUrl;

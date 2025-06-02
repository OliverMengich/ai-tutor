import { useEffect, useState } from "react";
export default function useDebounce<T>(value:T, delay: number){
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(()=>{
        const tmId = setTimeout(()=>{
            setDebouncedValue(value);
        },delay);
        return ()=>{
            clearTimeout(tmId);
        }
    },[value, delay]);
    return debouncedValue;
}
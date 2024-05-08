import { useEffect } from "react";

export function componentDidMount(func) {
    useEffect(() => {
        func();
    }, []);
}

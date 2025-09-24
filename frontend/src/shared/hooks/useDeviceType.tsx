import { useState, useEffect } from "react";

type DeviceType = 'mobile' | 'tablet' | 'desctop';

function getDeviceType(width: number): DeviceType {
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desctop';
}

function useDeviceType(debounceDelay = 200): DeviceType {
    const [deviceType, setDeviceType] = useState<DeviceType>(() => getDeviceType(window.innerWidth));

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const handleResize = () => {
            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                const newDeviceType = getDeviceType(window.innerWidth);
                setDeviceType((prev) => (prev !== newDeviceType ? newDeviceType : prev))
            }, debounceDelay)
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        }
    }, [debounceDelay]);

    return deviceType;
}

export default useDeviceType;
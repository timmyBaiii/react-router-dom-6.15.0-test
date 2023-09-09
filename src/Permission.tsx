import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Permission: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useState<boolean>(true);
    const whiteList = ['/404'];

    useEffect(() => {
        if (token) {
            navigate(location.pathname);
        }
        else {
            if (whiteList.indexOf(location.pathname) !== -1) {
                navigate(location.pathname);
            }
            else {
                navigate('/404');
            }
        }
    }, [location.pathname, token]);

    return <></>;
};

export default Permission;
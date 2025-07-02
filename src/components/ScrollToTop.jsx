import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [useLocation().pathname]);

	return null;
};

export default ScrollToTop;

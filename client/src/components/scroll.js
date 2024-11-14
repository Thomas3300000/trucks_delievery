import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Composant scroll, qui fait défiler la page vers le haut à chaque changement de page
const ScrollToTop = () => {
    const { pathname } = useLocation();

    // Effet qui se déclenche à chaque changement
    useEffect(() => {
        // Scroll vers le haut de la page
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export default ScrollToTop;

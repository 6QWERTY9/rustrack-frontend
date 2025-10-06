import { BrowserRouter } from 'react-router-dom';

import { PageLayout } from '../shared/components/PageLayout';
import { CategoryCard } from '../shared/components/CategoryCard';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <PageLayout>
                    <CategoryCard 
                        img={{
                            src: './svg/category_card/car230.webp',
                            imgMedium: './svg/category_card/car143.webp',
                            imgSmall: './svg/category_card/car100.webp'

                        }}
                    />
                </PageLayout>
            </BrowserRouter>
        </div>
    );
};

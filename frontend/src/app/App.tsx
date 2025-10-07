import { BrowserRouter } from 'react-router-dom';

import { PageLayout } from '../shared/components/PageLayout';
import { CategoryCard } from '../shared/components/CategoryCard';
import { NewsCard } from '../shared/components/NewsCard';

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
                    <NewsCard 
                        id='ewrr' 
                        date='15.06.2021' 
                        title='КАМАЗ готовит конкурента ГАЗели и Валдая (первые ФОТО)' 
                        img={{
                            src: './svg/news_card/news312.webp',
                            imgMedium: './svg/news_card/news228.webp',
                            imgSmall: './svg/news_card/news136.webp'
                        }}
                    />
                </PageLayout>
            </BrowserRouter>
        </div>
    );
};

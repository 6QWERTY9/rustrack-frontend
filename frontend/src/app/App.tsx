import { BrowserRouter } from 'react-router-dom';

import { PageLayout } from '../shared/components/PageLayout';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <PageLayout>
                    {
                        ''
                    }
                </PageLayout>
            </BrowserRouter>
        </div>
    );
};

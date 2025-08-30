import { BrowserRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { Button } from '../shared/components/Button';

import { ChevronButton } from '../shared/components/ChevronButton';

import { LinkLayout } from '../shared/components/LinkLayout';
import { TextInput } from '../shared/components/Input/ui/Text-input';

export const App = () => {
    return (
        <div>
            <Button theme="normal">{'dsfsd'}</Button>
            <BrowserRouter>
                <LinkLayout typeLink="download" route="./svg/ad.pdf">
                    <span>Получить КП</span>
                    <ReactSVG src="./svg/download.svg" />
                </LinkLayout>
            </BrowserRouter>
            <ChevronButton directionIcon="left" />
            <TextInput/>
        </div>
    );
};

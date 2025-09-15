import { BrowserRouter } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { Button } from '../shared/components/Button';

import { ChevronButton } from '../shared/components/ChevronButton';

import { LinkLayout } from '../shared/components/LinkLayout';[]
import { Input } from '../shared/components/Input';
import { PopUp } from '../shared/components/PopUp';
import { CatalogButton } from '../shared/components/Header/ui/components/CatalogButton';
import { DropDown } from '../shared/components/Header/ui/components/DropDown';
import { Nav } from '../shared/components/Header/ui/components/Nav';

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
            <Input type='search'/>
            <Input label='Имя' placeholder='Имя'/>
            <Input type='checkbox' sizeCheckbox='normal' label='genm'/>
            <Input type='radio' label='asdas'/>
            <PopUp open={true}/>
            <CatalogButton/>
            <DropDown/>
            <BrowserRouter>
            <Nav/>
            </BrowserRouter>

        </div>
    );
};

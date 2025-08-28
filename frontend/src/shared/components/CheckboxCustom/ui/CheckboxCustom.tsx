import type { CheckboxProps } from '../model';
import css from './index.module.scss';
export const CheckboxCustom: React.FC<CheckboxProps> = () => {
    return (
        <label>
            <input type="checkbox" className={css.checkbox_custom} />
        </label>
    );
};

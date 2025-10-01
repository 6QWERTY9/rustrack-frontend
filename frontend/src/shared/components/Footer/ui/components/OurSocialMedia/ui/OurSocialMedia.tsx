import { Link } from 'react-router-dom';
import type { IIconProps } from '../model';
import css from './index.module.scss';
import { ReactSVG } from 'react-svg';

const icons: IIconProps[] = [
  {to: 'https://www.facebook.com/?locale=ru_RU', src:'./svg/social/fb.svg'},
  {to: 'https://x.com/', src:'./svg/social/tw.svg'},
  {to: '', src:'./svg/social/google.svg'},
  {to: 'https://www.instagram.com/', src:'./svg/social/inst.svg'},
  {to: 'https://www.youtube.com/?app=desktop&hl=ru', src:'./svg/social/yt.svg'},
]

export const OurSocialMedia = () => {
  return (
    <div className={css.our_social_media_wrapper}>
      {icons.map((item, ind) => (
        <IconLink to={item.to} src={item.src} key={ind}/>
      ))}
    </div>
  )
}


const IconLink: React.FC<IIconProps> = ({to, src}) => {
  return (
    <div className={css.icon}>
      <Link to={to}>
        <ReactSVG src={src}/>
      </Link>
    </div>
  )
}
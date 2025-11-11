import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
  logoColor?: string;
}

export default function Header({ logoColor }: HeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <Link to={'/'}>
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="reciepe-radar-logo" className="w-20" />
          <p className={`text-4xl font-semibold ${logoColor} drop-shadow-lg`}>Recipe Radar</p>
        </div>
      </Link>
      <Link to={'/favorites'}>
        <p className={`text-xl font-semibold ${logoColor} drop-shadow-lg hover:text-emerald-400`}>
          Favorite Recipes
        </p>
      </Link>
    </div>
  );
}

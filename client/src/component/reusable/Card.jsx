import { Link } from 'react-router-dom';
const Card = ({product}) => {
  return (
    <li className='list-item'>
      <Link className='card flex space-between'>
              <p>{ product}</p>
        <span className='material-symbols-outlined'>add</span>
      </Link>
    </li>
  );
};

export default Card;

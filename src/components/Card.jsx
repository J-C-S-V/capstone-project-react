import '../styles/App.scss';
import { useSelector } from 'react-redux';

function Card() {
  const { card } = useSelector((state) => state.card);
  return (
    <div>
      <h2>
        {card}
      </h2>
    </div>
  );
}

export default Card;

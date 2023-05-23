import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCards } from '../redux/features/cardSlice';
import '../styles/App.scss';

function Card() {
  const { card } = useSelector((store) => store.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div>
      {card.map((item) => (
        <article key={item}>
          <header>
            {item.title_english}
          </header>
          <img height={400} width={300} alt="test" src={item.images.webp.image_url} />
          <p>
            Duration:
            {' '}
            {item.duration}
          </p>
          <p>
            Type:
            {' '}
            {item.type}
          </p>
          <p>
            Episodes:
            {' '}
            {item.episodes}
          </p>
          <p>
            Score:
            {' '}
            {item.score}
          </p>
          <button type="button" className="button">More info</button>
        </article>
      ))}
    </div>
    // <div>{card}</div>
  );
}

export default Card;
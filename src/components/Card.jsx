import '../styles/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCards } from '../redux/features/cardSlice';

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
          {/* // <h2 alt="test" key={item} src={item.mal_id}>{item.url}</h2> */}
        </article>
      ))}
    </div>
    // <div>{card}</div>
  );
}

export default Card;

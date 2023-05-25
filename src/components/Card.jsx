import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchCards, grabItemId } from '../redux/features/cardSlice';
import '../styles/App.scss';

function Card() {
  const { card, isLoading } = useSelector((store) => store.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {card.map((item) => (
        <article key={item.mal_id}>
          <header>{item.title_english}</header>
          <img
            height={400}
            width={300}
            alt="test"
            src={item.images.webp.image_url}
          />
          <p>
            Duration:
            {item.duration}
          </p>
          <p>
            Type:
            {item.type}
          </p>
          <p>
            Episodes:
            {item.episodes}
          </p>
          <p>
            Score:
            {item.score}
          </p>
          <NavLink
            onClick={() => { dispatch(grabItemId(item.mal_id)); }}
            type="button"
            className="button"
            to="/modal"
          >
            More info
          </NavLink>
        </article>
      ))}
    </div>
  );
}

export default Card;

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchCards, grabItemId } from '../redux/features/cardSlice';
import '../styles/Card.scss';

function Card() {
  const [search, setSearch] = useState('');
  // console.log(search);
  const { card, isLoading } = useSelector((store) => store.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (isLoading) {
    return <div className="card__loading">Loading...</div>;
  }

  return (
    <div className="card">
      <input
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        type="search"
        placeholder="Search"
        className="card__search"
      />
      {card
        .filter((item) => (search.toLowerCase() === ''
          ? item
          : item.title_english && item.title_english.toLowerCase().includes(search)))
        .map((item) => (
          <article className="card__article" key={item.mal_id}>
            <header className="card__header">{item.title_english}</header>
            <img
              height={200}
              width={150}
              alt="test"
              src={item.images.webp.image_url}
              className="card__img"
            />
            <p className="card__duration card__p">
              Duration:
              {item.duration}
            </p>
            <p className="card__type card__p">
              Type:
              {item.type}
            </p>
            <p className="card__episodes card__p">
              Episodes:
              {item.episodes}
            </p>
            <p className="card__score ">
              Score:
              {item.score}
            </p>
            <NavLink
              onClick={() => {
                dispatch(grabItemId(item.mal_id));
              }}
              type="button"
              className="card__button"
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

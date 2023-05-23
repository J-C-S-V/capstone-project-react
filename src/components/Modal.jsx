import { useSelector } from 'react-redux';
import '../styles/App.scss';

function Card() {
  const { card } = useSelector((store) => store.card);

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

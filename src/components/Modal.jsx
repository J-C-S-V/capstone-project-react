import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../styles/App.scss';

function Modal() {
  const { cardModal } = useSelector((store) => store.card);

  return (
    <div className="modal">
      <NavLink to="/">return</NavLink>
      <h1>This is the modal lol</h1>
      <article key={cardModal.mal_id}>
        <header>
          {cardModal.title_english}
        </header>
        <img height={400} width={300} alt="test" src={cardModal.images.webp.image_url} />
        <p>
          Duration:
          {' '}
          {cardModal.duration}
        </p>
        <p>
          Type:
          {' '}
          {cardModal.type}
        </p>
        <p>
          Episodes:
          {' '}
          {cardModal.episodes}
        </p>
        <p>
          Score:
          {' '}
          {cardModal.score}
        </p>
      </article>
    </div>
  );
}

export default Modal;

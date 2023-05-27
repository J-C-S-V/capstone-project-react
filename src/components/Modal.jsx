import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BackArrow } from '../assets/icons';
import '../styles/Modal.scss';

function Modal() {
  const { cardModal } = useSelector((store) => store.card);

  return (
    <div className="modal">
      <NavLink className="modal__return" to="/"><BackArrow /></NavLink>
      <article className="modal__article" key={cardModal.mal_id}>
        <header className="modal__header">
          {cardModal.title_english}
        </header>
        <img className="modal__img" height={300} width={200} alt="test" src={cardModal.images.webp.image_url} />
        <div className="modal__sections">
          <section className="modal__section-one">
            <div className="modal__stats">
              <header className="modal__card-header">
                {cardModal.duration.replace(/per ep/gi, '')}
              </header>
              <p className="modal__duration card__p">
                Duration
              </p>
            </div>
            <div className="modal__stats">
              <header className="modal__card-header">
                {cardModal.type}
              </header>
              <p className="modal__type card__p">
                Type
              </p>
            </div>
            <div className="modal__stats">
              <header className="modal__card-header">
                {cardModal.episodes}
              </header>
              <p className="modal__episodes card__p">
                Episodes
              </p>
            </div>
            <div className="modal__stats">
              <header className="modal__card-header">
                {cardModal.score}
              </header>
              <p className="modal__score card__p">
                Score
              </p>
            </div>
          </section>
          <section className="modal__section-two">
            <div className="modal__stats">
              <header className="modal__card-header">
                {cardModal.year}
              </header>
              <p className="modal__duration card__p">
                Year
              </p>
            </div>
            <div className="modal__stats">
              <header className="modal__card-header">
                {cardModal.popularity}
              </header>
              <p className="modal__type card__p">
                Popularity
              </p>
            </div>
            <div className="modal__stats">
              <header className="modal__card-header">
                {cardModal.rank}
              </header>
              <p className="modal__episodes card__p">
                Rank
              </p>
            </div>
            <div className="modal__stats">
              <header className="modal__card-header">
                {cardModal.broadcast.day}
              </header>
              <p className="modal__score card__p">
                Broadcast
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

export default Modal;

// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchCards } from '../redux/features/cardSlice';
import { NavLink } from 'react-router-dom';
import '../styles/App.scss';

function Modal() {
  // const { card } = useSelector((store) => store.card);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCards());
  // }, [dispatch]);

  return (
    <div className="modal">
      <h1>This is the modal lol</h1>
      <NavLink to="/">return</NavLink>
    </div>
    // <div>
    //   {card.map((item) => (
    //     <article key={item.mal_id}>
    //       <header>
    //         {item.title_english}
    //       </header>
    //       <img height={400} width={300} alt="test" src={item.images.webp.image_url} />
    //       <p>
    //         Duration:
    //         {' '}
    //         {item.duration}
    //       </p>
    //       <p>
    //         Type:
    //         {' '}
    //         {item.type}
    //       </p>
    //       <p>
    //         Episodes:
    //         {' '}
    //         {item.episodes}
    //       </p>
    //       <p>
    //         Score:
    //         {' '}
    //         {item.score}
    //       </p>
    //     </article>
    //   ))}
    // </div>
  );
}

export default Modal;

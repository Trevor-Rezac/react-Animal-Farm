
import './Animals.css';

export default function Animals({ name, type, says }) {
  return (
    <div className='animal-container'>
      <p className='animal-name'>{name}</p>
      <p className='animal-saying'>{says}</p>
      <img src={`/images/${type}.svg`}></img>
    </div>);
}


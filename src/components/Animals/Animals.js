
import './Animals.css';

export default function Animals(props) {
  console.log(props);
  return (
    <div className='animal-container'>
      <p className='animal-name'>{props.name}</p>
      <p className='animal-saying'>{props.says}</p>
    </div>);
}


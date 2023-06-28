
function Card(props) {
    return (
      <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow5'>
      <img alt="robots" src={`https://robohash.org/${props.id}?size=200x200`}/>
        <header>
        <h2>{props.name}</h2>
          <p>{props.email}</p>
        </header>
      </div>
    );
  }
  
  export default Card;
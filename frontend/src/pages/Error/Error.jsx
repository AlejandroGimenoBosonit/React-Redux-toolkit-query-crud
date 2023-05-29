import './Error.css';

const Error = (props) => {

  console.log(props);

  return (
    <div className='error-container'>
        <h1 className='error-title'>ERROR 404</h1>
        <p className='error-text'>Something was Wrong! :(</p>
    </div>
  )
}

export default Error
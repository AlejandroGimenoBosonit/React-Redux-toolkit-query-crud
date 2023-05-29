import { MoonLoader } from 'react-spinners';

const override = {
    display: "block",
    margin: "0 auto",
    
  };

const Spinner = () => {
  return (
    <MoonLoader cssOverride={override} loading={true} color="yellow" />
  )
}

export default Spinner
import { UseCounting } from '../context/countContext';
import { useNavigate } from 'react-router-dom';

function ContextTest() {
  const {firstName, setFirstName} = UseCounting()
  const route = useNavigate()
const Handlesubmit= (e)=>{
  e.preventDefault()
route('/show')
}

  return (
    <div>
      ContextTest
      <form onSubmit={Handlesubmit}>
        <label htmlFor='name'>First Name</label>
        <input type='text' name='name' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
      <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default ContextTest;

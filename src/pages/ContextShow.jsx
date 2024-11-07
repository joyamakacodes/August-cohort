import { UseCounting } from '../context/countContext';
import AxiosGet from '../components/AxiosGet';
function ContextShow() {
  const {firstName} = UseCounting()
  return (
    <div>
     Welcome {firstName}
     <AxiosGet/>
    </div>
  );
}

export default ContextShow;

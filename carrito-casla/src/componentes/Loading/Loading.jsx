import Spinner from 'react-bootstrap/Spinner';
import "./Loading.css"

const Loading = () => {
  return (
    <div className='loadingContainer'>
        <h2 className='titleLoading'>LOADING..........</h2>
        <Spinner animation="border" role="status" className="spinnerLoading">
           <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}

export default Loading
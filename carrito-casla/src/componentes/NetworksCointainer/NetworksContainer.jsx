import ButtonLogin from '../ButtonLogin/ButtonLogin'
import ButtonRegist from '../ButtonRegist/ButtonRegist'
import Networks from '../Networks/Networks'
import "./NetworksContainer.css"

const NetworksContainer = () => {
  return (
    <div className='networksContainer'>
      <Networks />
      <div className="buttonsContainerPresent">
        <ButtonRegist/>
        <ButtonLogin/>
      </div>
    </div>
  )
}

export default NetworksContainer
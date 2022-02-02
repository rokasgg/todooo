import '../../App.css';
import './home.css';
import profImg from './prof.jpg';
function ProfileArea(item) {

    return (

        <div className="ProfileSide">
            <div className='profileBox'>

                <img src={profImg} className='profilePicture' />
                <div className='profileName'>Rokas</div>
                <div className='statsBox'>
                    <div>Finished: <a>{item.finished}</a></div>
                    <div>Unfinished: <a>{item.unfinished}</a></div>
                </div>

            </div>

        </div>
    );
}

export default ProfileArea;
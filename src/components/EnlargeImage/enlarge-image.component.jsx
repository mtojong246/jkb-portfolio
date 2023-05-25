import './enlarge-image.styles.scss';

const EnlargeImage = ({ img, togglePopup, isPopup }) => {

    return (
        <>
            {isPopup && (
                <div className='enlarge-image-container'>
                    <div className='enlarge-image-overlay' onClick={togglePopup}></div>
                    <img src={img} alt='enlarged' className='popup' id='popup-image'/>
                </div>
            )}
        </>
    )
}

export default EnlargeImage;
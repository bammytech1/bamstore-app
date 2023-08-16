
import "./FeedBack.scss"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import feedbackData from '../../feedbackData.Jsx';




 const FeedBack = () => {
  return (
     <div className="container">
        <h4>FEEDBACK</h4>
        <h2>What Our Clients <b></b> Saying</h2>
        <Splide aria-label="Feedback" options={{
            fixedWidth: "300px",
            perPage: 3,
            gap    : '3rem',
            breakpoints: {
                640: {
                perPage: 2,
                gap    : '1rem',
                // height : '6rem',
                },
                480: {
                perPage: 1,
                gap    : '.7rem',
                // height : '6rem',
                },
            },
            pagination: true,
            arrows: false,
            focus: "center", 
            autoplay: true,
            rewind: true,
            type: "loop",
        }}>
            {feedbackData.map(feed => {
                return (
                    <SplideSlide className="card" key={feed.id}>
                        <Slides feed={feed} key={feed.id} />
                    </SplideSlide>
                )
            })}
        </Splide>
     </div>
  );
}


const Slides = (props) => {
    const { rating, comment, avatar, name, company,  } = props.feed
    return (
        <div className="slides">
            <h2>{rating}</h2>
            <p>{comment}</p>
            <div className="row-profile">
                <div className="avatar-container">
                    <img className='avatar' src={avatar} alt="" />
                </div>
                <div className="details">
                    <h3>{name}</h3>
                    <p>{company}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedBack
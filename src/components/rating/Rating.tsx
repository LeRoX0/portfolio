import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../assets/lerox.jpg'
import rating from '../../assets/rating.png'
import styled from 'styled-components';
const Container = styled(Swiper)`
 background-color: rgba(217, 217, 217, 0.13);
 width: 1000px;
 display: flex;
 justify: content;
`
const Swipe = styled(SwiperSlide)`
 & .comment{
  color: white;
  display: flex;
  padding: 20px;
  background: #D9D9D9;
  border-radius: 24px;
  width: 458px;
  align-items: center;
  margin: auto;
  opacity: 0.1;
  transition: 1s;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
 & .comment.active{
  background: #D9D9D9;
  color: white;
  display: flex;
  padding: 20px;
  border-radius: 24px;
  width: 458px;
  align-items: center;
  margin: auto;
  opacity: 1;
 }
 & .description{
  color: #5A5A5A;
 }
 & .picture{
  width: 100px;
  border-radius: 50%;
 }
 & .head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
 }
 & .head h1{
  color: #000000;
  font-size: 25px;
 }
 & .stars{
  width:100px;
 }
`
const Rating = () => {
  return (
    <Container
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <Swipe> 
      {({ isActive }) => (
                <div className={"comment" + (isActive ? ' active' : '')}>
                <img className="picture" src={img}/> {/* Replace imgPath with the actual image path */}
                <div>
                  <div className="head">
                    <h1>ammar yasser</h1>
                    <p>2d ago</p>
                  </div>
                  <p className='description'>
                    Lorem ipsum dolor, sit amet consectetur adipisi{' '}
                    Corrupti numquam nesciunt assumenda. Eius qui officia labore illum possimus, odio magnam veritatis{' '}
                    necessitatibus ducimus deserunt distinctio totam
                  </p>
                  <img className="stars" src={rating}/> {/* Replace ratingPath with the actual image path */}
                </div>
                </div>
      )}
      </Swipe>
      <Swipe> 
      {({ isActive }) => (
        <div className={"comment" + (isActive ? ' active' : '')}>
        <img className="picture" src={img}/> {/* Replace imgPath with the actual image path */}
        <div>
          <div className="head">
            <h1>ammar yasser</h1>
            <p>2d ago</p>
          </div>
          <p className='description'>
            Lorem ipsum dolor, sit amet consectetur adipisi{' '}
            Corrupti numquam nesciunt assumenda. Eius qui officia labore illum possimus, odio magnam veritatis{' '}
            necessitatibus ducimus deserunt distinctio totam
          </p>
          <img className="stars" src={rating}/> {/* Replace ratingPath with the actual image path */}
        </div>
        </div>
      )}
      </Swipe>
      <Swipe> 
      {({ isActive }) => (
        <div className={"comment" + (isActive ? ' active' : '')}>
        <img className="picture" src={img}/> {/* Replace imgPath with the actual image path */}
        <div>
          <div className="head">
            <h1>ammar yasser</h1>
            <p>2d ago</p>
          </div>
          <p className='description'>
            Lorem ipsum dolor, sit amet consectetur adipisi{' '}
            Corrupti numquam nesciunt assumenda. Eius qui officia labore illum possimus, odio magnam veritatis{' '}
            necessitatibus ducimus deserunt distinctio totam
          </p>
          <img className="stars" src={rating}/> {/* Replace ratingPath with the actual image path */}
        </div>
        </div>
      )}
      </Swipe>
    </Container>
  )
}

export default Rating

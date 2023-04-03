import Image from "next/image"
import styles from '../styles/Featured.module.css'
import Carousel from 'react-bootstrap/Carousel'

export default function Featured() {
    
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/img/pizza1.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/img/pizza2.jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='/img/pizza3.jpg'
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

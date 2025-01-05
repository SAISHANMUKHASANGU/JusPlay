import React from 'react';
import styled from 'styled-components';

function Products() {
  const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    min-height: 100vh;
    background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 50px;
  `;

  const Product = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 280px;
    height: 400px; /* Fixed height for uniformity */

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }
  `;

  const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  `;

  const Title = styled.h1`
    font-size: 1.5em;
    color: #333;
    margin: 20px 0;
    font-family: 'Garamond', serif;
  `;

  const Description = styled.p`
    font-size: 1.1em;
    color: #777;
    margin: 15px 0;
    font-family: 'Arial', sans-serif;
    line-height: 1.5;
    flex-grow: 1; /* Ensures the description can grow within the available space */
  `;

  const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Price = styled.p`
    font-size: 1.2em;
    color: #d4af37; /* Gold color */
    font-weight: bold;
  `;

  const Button = styled.button`
    background-color: #1c1c1c;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d4af37; /* Gold hover */
    }
  `;

  return (
    <Div>
      <Product>
        <ProductImage src="https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=1024x1024&w=is&k=20&c=q2bJOBlZOSptjYSzQ83_QYEz6obvZk-P1YLJGko1pX0=" alt="Cricket Bat" />
        <Title>Cricket Bat</Title>
        <Description>This is the bat preferred by many international cricketers to hit massive sixes.</Description>
        <PriceContainer>
          <Price>$60.99</Price>
          <Button>Buy</Button>
        </PriceContainer>
      </Product>

      <Product>
        <ProductImage src="https://nwscdn.com/media/catalog/product/cache/h700xw700/c/r/cricket-club-ball-family_1.jpg" alt="Cricket Ball" />
        <Title>Cricket Ball</Title>
        <Description>This is a ball interlinked with neuralink, spins as you think.</Description>
        <PriceContainer>
          <Price>$20.99</Price>
          <Button>Buy</Button>
        </PriceContainer>
      </Product>

      <Product>
        <ProductImage src="https://www.livemint.com/lm-img/img/2024/11/12/600x338/best_badminton_racket_1731392114857_1731392137197.webp" alt="Badminton Racket" />
        <Title>Racket</Title>
        <Description>This racket produces a boost when you want to give a smash.</Description>
        <PriceContainer>
          <Price>$120.99</Price>
          <Button>Buy</Button>
        </PriceContainer>
      </Product>
    </Div>
  );
}

export default Products;

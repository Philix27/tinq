import styled from 'styled-components';

// export const Img = styled.img`
//   width:100%;
//   height:100%;
//   object-fit: cover;
//   overflow: hidden;
// `

// export const GridContainer = styled.section`
// display: grid;
// grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
// padding: 3rem;
// column-gap: 2rem;
// row-gap: 3rem;
// @media ${(props) => props.theme.breakpoints.sm} {
//   display: flex;
//   flex-direction: column;
//   padding: 2rem;
//   padding-bottom: 0;
// }

// `
// export const BlogCard = styled.div`
//   border-radius: 10px;
//   box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
//   text-align: center;
//   width: 400px;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 100%;
//   }
// `;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #414143;
  padding: .5rem 0;
  font-size: ${(props) =>  '1.9rem' };
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  /* color: #dce3e7; */
  /* font-family: 'Droid Serif', serif; */
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


// export const CardInfo = styled.p`
//   width: 100%;
//   padding: 0 50px;
//   font-style: 2rem;
//   line-height: 24px;
//   text-align: justify;
//     @media ${(props) => props.theme.breakpoints.sm} {
//     padding:.3rem
  
// }
// `;


export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
/* color: #d8bfbf; */
font-size: 1.8rem;
padding-right: 8px;
`
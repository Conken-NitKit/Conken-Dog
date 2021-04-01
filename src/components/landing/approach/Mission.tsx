import styled from "styled-components";

const WhiteCircle = styled.div`
  position: relative;
  height: 550px;
  width: 550px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  top: 926px;
  background-color: white;
  z-index: 2;
`;


const BigCircle = styled.div`
  position: relative;
  height: 560px;
  width: 560px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  top: 371px;
  background-color: #87ceeb;
`;

const Komidasi = styled.h4`
position: absolute;
width: 90px;
height: 29px;
left: 675px;
top: 114%;
font-family: Roboto;
font-style: normal;
font-weight: 900;
font-size: 25px;
line-height: 29px;
text-align: center;
color: #87ceeb;
z-index: 2;
`;

const Bun = styled.p`
position: absolute;
width: 513px;
height: 256px;
left: 465px;
top:  124%;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 27px;
line-height: 32px;
text-align: center;
color: #000000;
z-index: 2;
`;

export const Mission = () => {
    return(
        <div>
        <WhiteCircle/>
        <BigCircle />
        <Komidasi>mission</Komidasi>
        <Bun>
          「〇〇がしたい！」という夢に向かって
          <br/>楽しく学ぶうちに実力がついている場所を作りたい。
          <br/>そのために、コンピュータ研究部は自由・
          <br/>交流・自信を大切にして、部員全員が
          <br/>「部活に行きたい！」と思える環境を目指しています。
        </Bun>
        </div>
    )
}

export default Mission;
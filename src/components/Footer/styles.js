import styled from "styled-components";

export const Container = styled.div`
padding:50px 10% 50px 10%;
background:#1b1b1b;
`
export const ContentContainer = styled.div`
display: flex;
flex-wrap:wrap;
width: 100%;
justify-content:space-between;
`

export const LogoContainer = styled.div`
width:40%;
margin-bottom:30px;
@media(max-width:1316px){
width:50%;
}
@media(max-width:650px){
width:100%;
}
`
export const TitleContainer = styled.div`
width:20%;
margin-bottom:30px;
@media(max-width:1316px){
width:50%;
}
@media(max-width:650px){
width:100%;
}
`

export const Title = styled.h1`
font-size:30px;
color:white;
display:flex;
align-items:center;
gap:15px;
@media(max-width:1316px){
justify-content:center;
white-space:nowrap;
}
`
export const Desc = styled.h1`
font-size:20px;
color:#7f7f7f;
margin-top:20px;
width:80%;
@media(max-width:1316px){
text-align:center;
width:100%;
}
`

export const CopyRight = styled.h1`
text-align:center;
color:#7f7f7f;
font-size:17px;
`

export const IconContainer = styled.div`
display:flex;
justify-content:center;
gap:30px;
`
export const IconStyle = styled.i`
color:#d1d1d1;
padding-top:5px;
padding-bottom:5px;
font-size:20px;
cursor:pointer;
`
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 70px;
background-color: #fff;
`;
export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;
`;
export const LogoContainer = styled.div`
margin-left: .5rem;
display: flex;
align-items: center;
font-size: 1.2rem;
font-family: sans-serif;
`;
export const Menu = styled.ul`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
list-style: none;

@media screen and (max-width: 768px) {
    background-color: #fff;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all .5s ease;
}
`;
export const MenuItem = styled.li`
height: 100%;

@media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
export const MenuItemLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0 1rem;
color: #000;
font-family: sans-serif;
font-size: .9rem;
text-transform: uppercase;
font-weight: bold;
cursor: pointer;
transition: all .5s ease;
&:hover {
    color: #FF4EAC;
    transition: all .5s ease;
}

@media screen and (max-width: 768px) {
    width: 100%;
}
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        fill: #000;
        margin-left: 1rem;
        height: 25px;
        width: 25px;
    }
}
`;
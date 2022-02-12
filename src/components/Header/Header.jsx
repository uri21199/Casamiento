import React, { useState } from 'react';
import { Container, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from './Header-el.js';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <Wrapper>
                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
                    }

                </MobileIcon>
                <Menu open={isOpen}>
                    <MenuItem>
                        <MenuItemLink onClick={() => setIsOpen(!isOpen)}>
                        Inicio
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={() => setIsOpen(!isOpen)}>
                        Dónde & Cuándo
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={() => setIsOpen(!isOpen)}>
                        Confirmar asistencia
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink onClick={() => setIsOpen(!isOpen)}>
                        Mesa de regalos
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    )
};

export default Header;

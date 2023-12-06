// Header.js
import React from 'react';
import './header.css';
import { Grommet, Button, Anchor,  } from 'grommet';
import { Home } from "grommet-icons";


const Header = () => {
    return (
        <Grommet full>
            <Header background="brand">
                <Button icon={<Home />} hoverIndicator />
                <Anchor label="About" />
                <Anchor label="Works" />
                <Anchor label="Contact" />
            </Header>
        </Grommet>
    );
}

export default Header;

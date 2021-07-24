import React from 'react';
import {HeaderContainer, OptionsContainer, OptionLink} from './header.styles'

const Header = () => (
    <HeaderContainer className="header">
        
            <OptionsContainer>
                <OptionLink to="/modern">MODERNE TEPPICHE</OptionLink>
                <OptionLink to="/vintage">VINTAGETEPPICHE</OptionLink>
                <OptionLink to="/klassisch">KLASSISCHE TEPPICHE</OptionLink>
                <OptionLink to="/kinder">KINDERTEPPICHE</OptionLink>
                <OptionLink to="/wohnlich">WOHNACCESSOIRES</OptionLink>
                <OptionLink className="header-sale" to="/sale">% SALE</OptionLink>
        </OptionsContainer>
    </HeaderContainer>
)

export default Header;
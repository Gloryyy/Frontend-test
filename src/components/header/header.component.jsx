import React from 'react';
import {HeaderContainer, OptionsContainer, OptionLink} from './header.styles'

const Header = () => (
    <HeaderContainer className="header">
        
            <OptionsContainer>
                <OptionLink to="/modern" target="_blank">MODERNE TEPPICHE</OptionLink>
                <OptionLink to="/vintage" target="_blank">VINTAGETEPPICHE</OptionLink>
                <OptionLink to="/klassisch" target="_blank">KLASSISCHE TEPPICHE</OptionLink>
                <OptionLink to="/kinder" target="_blank">KINDERTEPPICHE</OptionLink>
                <OptionLink to="/wohnlich" target="_blank">WOHNACCESSOIRES</OptionLink>
                <OptionLink className="header-sale" to="/sale" target="_blank">% SALE</OptionLink>
        </OptionsContainer>
    </HeaderContainer>
)

export default Header;
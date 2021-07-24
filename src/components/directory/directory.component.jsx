import React from "react";
import MenuItem from "../menu-item/menu-item.component"
import { DirectoryMenuContainer } from './directory.styles';
import SHOP_DATA from './../../shop-data';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = SHOP_DATA.shopdata;
    }

    render() {
        return (
            <DirectoryMenuContainer>
                { this.state.initialdata.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps} />
                ))
                }
            </DirectoryMenuContainer>
        )
    }
}

export default Directory;
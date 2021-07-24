import React, {useState, useRef} from 'react';
import { useOnClickOutside } from '../../hooks';
import Burger from "../../components/burger";
import Menu from "../../components/menu";

const ToggleMenuIcon = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <>
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        </>
    )
}

export default ToggleMenuIcon;
import Card from "./Card";
import React, { useState } from "react";

function Modal({children, show, onHideModal})
{
    function hideModal(event)
    {
        let target = event.target;
        if(target.id == 'modal')
        {
            onHideModal();
        }
    }

    return(
        <div id='modal' onClick={hideModal} className={show? 'modal' : 'modal hide'}>
            <Card className='cardModal'>
                {children}
            </Card>
        </div>
    );
}


export default Modal;
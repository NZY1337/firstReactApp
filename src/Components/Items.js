import React, { Component } from 'react';

// standalone component - this will be a child to a bigger component (parent)
const Items = (props) => {
    return (
       <div className="mt-2">
            <p> We have a lot of items today {props.items.join(', ')}</p>
       </div>
    )
}

// defaultprops setted
Items.defaultProps = {
    items: ['lol', 'default','props']
}
// !rendered in myFirstComponent
export default Items;
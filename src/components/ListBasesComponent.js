import React from 'react'


export default (props) => (
    <div>
        <h2>Choose one Base</h2>
        <ul>
            {props.bases.map(base => 
                <li key={base.id}><input type="radio" name="base" onChange={props.onChange} />
                {base.name} - {base.price}
                </li>
            )}
        </ul>
    </div>
)

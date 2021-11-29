import React from 'react'

function FilterButton({button, filter}) {
    return (
        <div className="button-container">
            {
                button.map((categories, i) => {
                    return <button className="btn" type="button" onClick={() => filter(categories)}>{categories}</button>
                })
            }
        </div>
    )
}

export default FilterButton;

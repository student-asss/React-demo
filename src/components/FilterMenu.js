// import { Container } from '@material-ui/core';
import React from 'react';
import Flip from 'react-reveal/Flip';

function FilterMenu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) => {
                    return <div className="item-filter" key={item.id}>
                        <div className="item-container">
                            <img src={item.image} alt="" />
                            <h2>{item.title}</h2>
                            <div className="portfoli-subtext">
                                <p>{item.technologies}<strong>{item.divider}</strong><span>{item.text_technologies}</span></p>
                                <p>{item.role}<strong>{item.divider}</strong><span>{item.text_role}</span></p>
                                <p>{item.data}<strong>{item.divider}</strong><span>{item.text_data}</span></p>
                                <Flip><a href={item.link} className="link-handle-portfolio">GitHub</a></Flip>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default FilterMenu;

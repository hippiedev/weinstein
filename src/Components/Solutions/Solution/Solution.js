import React from 'react';
import styles from './Solution.module.css';
import growth from '../../../assets/images/growth.svg';
import productivity from '../../../assets/images/productivity.svg';
import goals from '../../../assets/images/goals.svg';

function Solution(props) {
    let itemImage1, itemImage2, itemImage3;
    let itemContent1, itemContent2, itemContent3;
    let itemTitle1, itemTitle2, itemTitle3;
    switch (props.solution) {
        case "institutions":
            itemTitle1 = 'Reduce operational costs and risks';
            itemTitle2 = 'Increase advisor capacity and productivity';
            itemTitle3 = 'Enhance client engagement & experience';
            itemImage1 = growth;
            itemImage2 = productivity;
            itemImage3 = goals;
            itemContent1 = 'Digitize your business processes to reduce errors, account opening times and operational costs while simplifying record-keeping.';
            itemContent2 = 'The My Day Overview provides a holistic view of your client’s activity and insights to help you efficiently serve your clients and proactively prepare for next steps.';
            itemContent3 = 'Build stronger relationships with clients by engaging with them on the things that matter most through a modern, transparent and simple to use portal.';
            break;
        
            default:

        
    }
    return (
        <div className={styles.Solution}>
            <div>
                <img src={itemImage1} alt="" />
                <h2>{itemTitle1}</h2>
                <p>{itemContent1}</p>
            </div>
            <div>
                <img src={itemImage2} alt="" />
                <h2>{itemTitle2}</h2>
                <p>{itemContent2}</p>
            </div>
            <div>
                <img src={itemImage3} alt="" />
                <h2>{itemTitle3}</h2>
                <p>{itemContent3}</p>
            </div>
        </div>
    )
}

export default Solution

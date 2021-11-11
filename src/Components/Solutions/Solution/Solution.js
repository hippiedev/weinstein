import React from 'react';
import styles from './Solution.module.css';
import growth from '../../../assets/images/growth.svg';
import productivity from '../../../assets/images/productivity.svg';
import goals from '../../../assets/images/goals.svg';
import save from '../../../assets/images/save.svg';
import resume from '../../../assets/images/resume.svg';
import relax from '../../../assets/images/relax.svg';
import progress from '../../../assets/images/progress.svg';
import investing from '../../../assets/images/investing.svg';
import freelance from '../../../assets/images/freelance.svg';
import employer from '../../../assets/images/employer.svg';
import coworker from '../../../assets/images/coworker.svg';
import dashboard from '../../../assets/images/dashboard.svg';

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
        case "individuals":
            itemTitle1 = 'Save more of your money';
            itemTitle2 = 'Portfolios as unique as you';
            itemTitle3 = 'Invest & relax';
            itemImage1 = save;
            itemImage2 = resume;
            itemImage3 = relax;
            itemContent1 = 'Access Canada’s lowest management fees to save and keep more of your money.';
            itemContent2 = 'We don’t do labels. Your portfolio is uniquely matched based on your investing style and savings goals.';
            itemContent3 = 'Our portfolio managers and smart technology monitors and rebalances your investments. You can sit back and plan your future.';
            break;
        case "advisors":
            itemTitle1 = 'Expand your audience';
            itemTitle2 = 'Scale your business';
            itemTitle3 = 'Be independent';
            itemImage1 = progress;
            itemImage2 = investing;
            itemImage3 = freelance;
            itemContent1 = 'Increase your appeal to high-net-worth and other investors looking to take advantage of a low-cost digital solution.';
            itemContent2 = 'Save time and money by leveraging technology that reduces time spent on non-revenue generating tasks while keeping more of what you earn.';
            itemContent3 = 'Take control of the solutions you offer your clients and work with an independent partner that prioritizes the success of you and your client’s best interests.';
            break;
        case "employers":
            itemTitle1 = '100% Free for the Employer';
            itemTitle2 = 'Digital Onboarding and Setup';
            itemTitle3 = 'Digital Dashboard';
            itemImage1 = employer;
            itemImage2 = coworker;
            itemImage3 = dashboard;
            itemContent1 = 'You can help your employees save more at no cost to you.';
            itemContent2 = '3 Minute Setup – no more paper work or licking envelopes, getting your company setup on Nest Wealth at Work is effortless.';
            itemContent3 = 'Get the big picture of your entire company plan at your fingertips.';
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

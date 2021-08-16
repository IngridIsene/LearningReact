import classes from './Card.module.css'
// A component that wraps jsx content 
//props.children is a special prop which every component recieves by defualt. This means that component will display whatever is included in between the opening and closing tags. 
// So in MeetUpItem the JSX content is wrapped inside the <Card> component. And therefor the JSX will be displayed  

export function Card(props) {
    return <div className={classes.card}>{props.children}</div>;
}

export default Card; 






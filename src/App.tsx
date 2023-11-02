import { Link } from 'react-router-dom'
import logoDark from './logo-dark.png'
import Router from './Router'


export default function App(props: { className?: string }) {
    return (<div className={props.className}>
        <Link to='/'>
            <img src={logoDark} width='50px' />
        </Link>
        <Router />
    </div>)
}
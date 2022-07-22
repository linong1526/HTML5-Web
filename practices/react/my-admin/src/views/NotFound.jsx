import {Component} from 'react'
import FourZeroFour from '../404.png'

class NotFound extends Component {
    render() {
        return (
            <div>
                <img width="400" height="400" src={FourZeroFour} alt=""/>
            </div>
        )
    }
}

export default NotFound
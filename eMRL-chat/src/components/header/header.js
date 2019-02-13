import React from "react";
import {AppRegistry, Image} from 'react-native';
import logo from "../../assets/efmrl-chat-final.png";

export default class Header extends Component {
    render() {
        return (
            <Image source={logo} style={{width: 193, height: 110}}/>
        );
    }

}

AppRegistry.registerComponent('eMRL', () => Header);


// const Header = props => {
//     return (
//         <header>
//             <img src={logo} alt="efmrl logo" />
//         </header>
//     );
// };
//
// export default Header;
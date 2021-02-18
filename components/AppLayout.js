import App from "next/app";
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ( { children }) => {
    return (
        <div>
            <Link href="/"><a>노드버드</a></Link>
            <div>공통메뉴</div>
            {children}
        </div>
    )
};

AppLayout.propTypes = {
  children : PropTypes.node.isRequired,
};

export default AppLayout;
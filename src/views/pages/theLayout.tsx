import React from 'react';
import Footer from './common/Footer';
import Header from './common/Hesder';

const theLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            {/* website Body section Start  */}
            <div>
                <main>this si body section</main>
            </div>
            {/* website Body section End  */}
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default theLayout;
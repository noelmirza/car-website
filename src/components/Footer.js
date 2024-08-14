import React, { useState } from 'react';

const Footer = () => {
    return (
        <footer>
            <hr />
            <p>&copy; CarCollection {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;
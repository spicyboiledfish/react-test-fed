import React, { useState, memo } from 'react';

const ChildrenComponent = memo(({ handleChidren }: { handleChidren: () => void}) => {
    console.log('这里chidlren进来了')
    return <div onClick={handleChidren}>ChildrenComponent</div>;
});

export default ChildrenComponent;
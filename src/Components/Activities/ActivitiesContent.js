import React from 'react';

const ActivitiesContent = ({ contentHtml }) => {
    return(
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    );
};

export default ActivitiesContent;

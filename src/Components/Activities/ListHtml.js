import React from 'react';

const ListHtml = ({ contentHtml }) => {
    return(
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    )
};

export default ListHtml;

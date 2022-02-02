import React from 'react';
//enderizar código HTML en lugar de texto plano
const ListHtml = ({ contentHtml }) => {
    return(
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    );
};

export default ListHtml;

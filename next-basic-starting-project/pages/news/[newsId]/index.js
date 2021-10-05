import React from 'react';
import { useRouter } from 'next/router'

function index() {
    const router=useRouter();
    console.log(router.query.newsId)
    return (
        <h1>{router.query.newsId} Page</h1>
    )
}

export default index
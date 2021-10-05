import React,{Fragment} from 'react';
import Link from 'next/link'

function index() {
    return (
        <Fragment>
        <h1>News Page</h1>
        <ul>
            <li><Link href="/news/next-js">Next JS</Link></li>
            <li><Link href="/news/something-else">Something Else</Link></li>
        </ul>
        </Fragment>
    )
}

export default index
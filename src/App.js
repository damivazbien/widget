import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is ComponentDidMount()?',
        content: 'componentDidMount() is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle'
    },
    {
        title: 'What is useEfect()?',
        content: 'useEfect() is a function that lets you use something like lifecycle methods in a functional component'
    },
    {
        title: 'What is Ref?',
        content: 'Function that lets you create a "ref" in a function component.'
    },
    {
        title: 'What is useState()?',
        content: 'Function that lets you use state in a functional component.'
    }
];


export default () =>
{
    return (
        <div>
            <Search />
            {/* <Accordion items={items}/> */}
        </div>
        );
}

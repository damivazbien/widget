import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];

export default () =>
{
    const [selected, setSelected] = useState(options[0]);
    const [showDropDown, setShowDropDown] = useState(true);

    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}></Accordion>
            </Route>
            <Route path="/list">
                <Search></Search>
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                ></Dropdown>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
            
        </div>
        );
}

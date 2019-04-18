import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Person = ({name, num, job}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${num}.jpg`;
    return (
        <article className="person">
            <img src={url} alt="person" />
            <h4>{name}</h4>
            <h4>{job}</h4>
        </article>
    )
}

const PersonList = () => {
    return (
        <React.Fragment>
            <h1 className="person-title">Person List</h1>
            <hr/>
            <section className="person-list">
                <Person num="62" name="Ram" job="Software Engineer" />
                <Person num="64" name="Sham" job="Software Engineer" />
                <Person num="50" name="Mahesh" job="Software Engineer" />
                <Person num="51" name="Mahesh" job="Software Engineer" />
                <Person num="52" name="Mahesh" job="Software Engineer" />
                <Person num="53" name="Mahesh" job="Software Engineer" />
                <Person num="54" name="Mahesh" job="Software Engineer" />
                <Person num="55" name="Mahesh" job="Software Engineer" />
                <Person num="56" name="Mahesh" job="Software Engineer" />
                <Person num="57" name="Mahesh" job="Software Engineer" />
                <Person num="58" name="Mahesh" job="Software Engineer" />
                <Person num="59" name="Mahesh" job="Software Engineer" />
                <Person num="60" name="Mahesh" job="Software Engineer" />
            </section>
        </React.Fragment>
    )
}



ReactDOM.render(<PersonList />, document.getElementById('root'));


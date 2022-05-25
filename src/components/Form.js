import React from 'react';

export default function MemberForm(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name:
                <input
                    type='text'
                    name='name'
                    placeholder='Type your name here!'
                    value={values.name}
                    onChange={onChange}
                />
            </label>
            <label>Email:
                <input
                    type='email'
                    name='email'
                    placeholder='Type your email here!'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <label>Role:
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>-- Select a Role --</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Designer'>Designer</option>
                </select>
            </label>
            <input type='submit' value='submit'></input>
        </form>
    )
}
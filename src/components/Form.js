import React from 'react';

export default function MemberForm(props) {

    return (
        <form>
            <label>Name:
                <input
                    type='text'
                    name='name'
                    placeholder='Type your name here!'
                />
            </label>
            <label>Email:
                <input
                    type='email'
                    name='email'
                    placeholder='Type your email here!'
                />
            </label>
            <label>Role:
                <select name='role'>
                    <option value=''>-- Select a Role --</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Designer'>Designer</option>
                </select>
            </label>
        </form>
    )
}
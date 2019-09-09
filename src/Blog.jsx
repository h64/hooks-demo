import React, { useState, useEffect } from 'react';
import Post from './Post';
import Form from './Form';

const Blog = props => {
    // Define the 'posts' state variable
    const [posts, setPosts] = useState([]);
    const [lastInput, setLastInput] = useState('');

    // Initial AJAX request + subsequent requests on form submit
    useEffect(() => {
        console.log('Fetching data w/ useEffect');
        fetchData();
    }, [lastInput])

    // Runs after every render to change the document title
    useEffect(() => {
        console.log('Updating title...', posts.length, 'items')
        document.title = `${posts.length} posts`;
    })

    function fetchData() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url + `/${lastInput}`)
        .then(res => res.json())
        .then(json => {
            // setPosts(json);
            if(Array.isArray(json)) {
                setPosts(json);
            } else {
                setPosts([json]);
            }
        })
    }

    function handleDelete(idx) {
        console.log('Deleting post', idx);
        let postsCopy = [...posts];
        postsCopy.splice(idx, 1);
        setPosts(postsCopy);
    }

    let postElems = posts.map((post,  idx) => {
        return <Post 
            key={idx} 
            title={post.title} 
            body={post.body} 
            handleDelete={handleDelete}
            idx={idx}
        />
    })

    return (
        <div>
            <Form 
                setLastInput={setLastInput}
            />
            {postElems}
        </div>
    )
}

export default Blog;
import { useState  } from 'react';
import postData from './post.json'
import Article from '../component/Article'
import Search from '../component/Search';

function HomePage() {
    const [posts, setPost] = useState(postData);
    const [totalPost, setTotalPost] = useState(0);



    const onChangeSearch = (value) => {
        console.log(value);
        const filteredData = postData.filter(item => item.title.includes(value))
        setPost(filteredData);
        setTotalPost(filteredData.length);
    };

    return (
        <>
            <h1>Ini HomePage</h1>
            <Search onChangeSearch={onChangeSearch} totalPost={totalPost}/>
            <div>
                {posts.map((props, index ) => (
                    <Article {...props} key={index} />
                ))}
            </div>
        </>
    )
}

export default HomePage
import { Component } from "react";
import styles from './AllPost.module.css'
import axios from 'axios'

class AllPosts extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            errorMesage: '',
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState ({
                posts:response.data
            })
        }).catch(error =>{
            this.setState({
                errorMesage:error.message

            })
        })
    }
    render() {
        const { posts , errorMesage} = this.state 
        console.log(posts)
        console.log(errorMesage)

        return (
            <div className={styles.post_cover}>
                <h1>AllPost</h1>
                <div className={styles.post_all}>
                    {
                        posts.length > 0 ? posts.map(post =>
                            <div className={styles.post_item} key={post.id}>
                                <strong>{post.id}</strong>
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                            </div>
                        ) : <div>Data yoxdur</div>
                    }
                </div>
            </div>
        );
    }
}
 
export default AllPosts;
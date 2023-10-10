import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from '../../data'
export default function Feed() {
  return (
    <div className='feed'>
        <div className='feedWrapper'>
         <Share></Share>
        {
          Posts.map((p)=>(
            <Post
            key={p.id}
            post={p}></Post>
          ))
        }
        </div>
    </div>
  )
}

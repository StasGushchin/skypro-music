import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BlogPost(props) {
    return (
      <div>
        <h1>{props.body || <Skeleton />}</h1>
      </div>
    );
  }
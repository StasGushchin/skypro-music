import Skeleton from 'react-loading-skeleton'

function BlogPost(props) {
  return (
    <div>
      <h1>{props.title || <Skeleton />}</h1>
      {props.body || <Skeleton count={10} />}
    </div>
  );
}

export default Skeleton


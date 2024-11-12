export default function SinglePost({writer, title, content}) {
    return(
        <li>
            <div>{writer}</div>
            <div>{title}</div>
            <div>{content}</div>
        </li>
    );
}
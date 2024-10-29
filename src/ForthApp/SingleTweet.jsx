export default function SingleTweet({writer, date, children}) {

    return(
        <li>
            <div>{writer}</div>
            <div>{date}</div>
            <div>{children}</div>
        </li>
    );
}
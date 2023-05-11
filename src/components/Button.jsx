export default function Button ({socialName, socialLink, socialClass}) {
    return (
        <button className={socialClass}>
            <a href={socialLink}>{socialName}</a>
        </button>
    )
}
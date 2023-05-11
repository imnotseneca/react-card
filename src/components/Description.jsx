export default function Description ({title, paragraph}) {
    return (
        <div className="description--container">
            <h2 className="description--title">{title}</h2>
            <p className="description--paragraph">{paragraph}</p>
        </div>
    )
}
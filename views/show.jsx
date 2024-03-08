const React = require('react')
const Default = require('./layouts/default')

function Show({ bread, index }) {
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{ bread.name }</h3>
            <p>
                and it
                {
                    bread.hasGluten ? <span> does </span> : <span> does not </span>
                }
                have gluten
            </p>
            <img src={ bread.image } alt={ bread.name } height='350' width='800' />
            <li>
                <a href='/bread'>Go Home</a>
            </li>
            <li>
                <a href={`/bread/${index}/edit`}>Edit</a>
            </li>
            <form action={`/bread/${index}?_method=DELETE`} method='POST'>
                <input type="submit" value="DELETE" />
            </form>
        </Default>
    )
}

module.exports = Show
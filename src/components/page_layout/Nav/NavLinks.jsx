import React from 'react';
import { BsChevronDown } from 'react-icons/bs'

const NavLinksJsx = props => {
    const links = props.links.map((link, i) => {
        const nestedLinks = link.nestedLinks ? generateNestedLinks(link.nestedLinks) : null
        return (
            <li key={i}>
                {link.tag ? <span className="link-tag">{link.tag}</span> : null}
                <a href={link.href}>{link.name} {nestedLinks ? <BsChevronDown className="nav-link-arrow" /> : null}</a>
                {nestedLinks}
            </li>
        )
    }
    )
    return (
        <ul className="col" id="navegation-links">
            {links}
        </ul>
    )
}

const generateNestedLinks = (nestedLinks) => {
    const classes = [
        "secondary-link-nest"
    ]
    const links = nestedLinks.map((link, i) => {
        let nestedLinks
        if (link.nestedLinks) {
            nestedLinks = link.nestedLinks.map((thirdLink, i) => {
                return (
                    <li key={i}>
                        <a href={thirdLink.href}>
                            {thirdLink.name}
                        </a>
                    </li>
                )
            })
            classes.push("has-third-link-nest")
            nestedLinks =
                <ul className="third-link-nest">
                    {nestedLinks}
                </ul>
        }

        return (
            <li key={i}>
                <a href={link.href}>
                    {link.name}
                </a>
                {nestedLinks}
            </li>
        )
    })
    return (
        <ul className={classes.join(' ')}>
            {links}
        </ul>
    )
}

export default NavLinksJsx



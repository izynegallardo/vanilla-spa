import styles from './component.module.css'
import githubLogo from '../../assets/github.svg'
import packageIcon from '../../assets/package.svg'
import npmLogo from '../../assets/npm.svg'

export default function Footer(root) {
    root.innerHTML = `
        <div class='${styles['footer-div']}'>
            <ul>
                <li><a href='https://github.com/izynegallardo/vanilla-spa' target='_blank'>
                        <img class='${styles['button-icon']}' src="${githubLogo}" role='presentation' aria-hidden='true'></img>
                        GitHub
                    </a>
                </li>
                <li><a href='https://github.com/izynegallardo/create-vanilla-spa' target='_blank'>
                        <img class='${styles['button-icon']}' src="${packageIcon}" role='presentation' aria-hidden='true'></img>
                        Package
                    </a>
                </li>
                <li><a href='https://www.npmjs.com/package/create-vanilla-spa' target='_blank'>
                        <img class='${styles['button-icon']}' src="${npmLogo}" role='presentation' aria-hidden='true'></img>
                        npm
                    </a>
                </li>
            </ul>
        </div>
    `

    root.className = styles['footer']
}

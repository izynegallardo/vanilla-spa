import styles from './component.module.css'

export default function Navigation(root) {
    root.innerHTML = `    
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/pages/1'>Pages</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
        </ul>
    `

    root.className = styles['navigation']
}

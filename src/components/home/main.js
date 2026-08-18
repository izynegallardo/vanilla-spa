import styles from './component.module.css'
import javascriptLogo from '../../assets/javascript.svg'
import viteLogo from '../../assets/vite.svg'
import Counter from '../counter/main'

export default function Main(root) {
    root.innerHTML = `
        <div class='${styles['home-div']}'>
            <section class='${styles['home-section']}'>
                <div class='${styles['link-div']}'>
                    <a class='${styles['link']}' href='https://vite.dev/' target='_blank'>
                        <img class='${styles['vite']}' src="${viteLogo}" alt='Vite logo' />
                    </a>
                    <a class='${styles['link']}' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <img class='${styles['framework']}' src="${javascriptLogo}" alt='JavaScript logo'/>
                    </a>
                </div>
                <a href='https://github.com/izynegallardo/vanilla-spa' target="_blank">
                    <h1>vanilla-spa</h1>
                </a>
                <div id='counter-container'></div>
            </section>
            
        </div>
    `

    root.className = styles['home']

    Counter(document.getElementById('counter-container'))
}

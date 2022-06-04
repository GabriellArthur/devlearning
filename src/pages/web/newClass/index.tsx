import styles from './newClass.module.scss'
import React from 'react';

export default function newClass () {
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    }
    return (
        <>
            <div className={styles.bodyLesson}>
                <div className={styles.header__banner}>
                    <div className={styles.header__box}>
                        <span>Titulo:</span>
                        <textarea className={styles.title} name="title" id="title"></textarea>
                        <br></br>
                        <span>Subtitulo:</span>
                        <textarea className={styles.subtitle} name="subtitle" id="subtitle"></textarea>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.box__media}>
                    <div className={styles.media}>
                        <button onClick={handleClick}>
                            <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-cloud-storage-dark-icon-01-en-25sep20?$native--t$"/>
                            <p>Upload image</p>
                        </button>
                        <input style={{display: 'none'}} className={styles.media__btn} type="file" id="img" name="img" ref={hiddenFileInput}/>
                    </div>
                </div>
                <div className={styles.box__content}>
                <div className={styles.content}>
                    <span>Conteudo:</span>
                    <textarea className={styles.text__area} name="text" id="text"></textarea>
                </div>
                </div>
                <div className={styles.box__button}>
                    <button className={styles.button}>Criar aula</button>
                </div>
            </div>
        </>
    )
}
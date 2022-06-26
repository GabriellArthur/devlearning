import styles from './newClass.module.scss'
import React from 'react';
import api from '../../../services/api'
import { parseCookies } from "nookies";

export default function newClass () {
    const cookies = parseCookies();
    const token = cookies["@devlearning.token"];

    const [formValue, setformValue] = React.useState({
        name: '',
        title: '',
        subtitle: '',
        description: '',
        imageFile: null,
      });

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const  handleSubmit = async () => {
        await api({
            method: 'post',
            url: '/courses/',
            headers:{"Authorization": `Bearer ${token}`},
            data: formValue
        });
        window.alert('A aula foi criada!')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.bodyLesson}>
                    <div className={styles.header__banner}>
                        <div className={styles.header__box}>
                            <span>Nome do curso:</span>
                            <input
                                className={styles.name}
                                name="name"
                                id="name"
                                value={formValue.name}
                                onChange={handleChange}
                                required
                                />
                            <span>Titulo:</span>
                            <input 
                                className={styles.title} 
                                name="title" 
                                id="title"
                                value={formValue.title}
                                onChange={handleChange}
                                required
                                />
                            <span>Subtitulo:</span>
                            <textarea
                                className={styles.subtitle}
                                name="subtitle"
                                id="subtitle"
                                value={formValue.subtitle}
                                onChange={handleChange}
                                required
                                />
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.box__media}>
                        <div className={styles.media}>
                            <p>URL da imagem</p>
                            <input
                                className={styles.media__btn}
                                type="text"
                                id="imageFile"
                                name="imageFile"
                                value={formValue.imageFile}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.box__content}>
                        <div className={styles.content}>
                            <span>Conteudo:</span>
                            <textarea
                                className={styles.text__area}
                                name="description"
                                id="description"
                                value={formValue.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.box__button}>
                        <button className={styles.button} type="submit">Criar Aula</button>
                    </div>
                </div>
            </form>
        </>
    )
}

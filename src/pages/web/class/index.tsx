import Head from 'next/head';
import styles from './styles.module.scss';

import api from '../../../services/api'
import React from "react";
import Link from 'next/link';

import { parseCookies } from "nookies";

export default function Class () {
    const [posts, setPosts] = React.useState([]);
    const cookies = parseCookies();
    const token = cookies["@devlearning.token"];

    React.useEffect(() => {
        api.get("/courses/").then((response) => {
            setPosts(response.data.data);
        });
    }, []);  

    const onDelete = async (id) => {
        var response = await api.delete(`/courses/${id}`,{
            headers:{"Authorization": `Bearer ${token}`}
        });
        if (response.status == 200) {
            api.get("/courses/").then((response) => setPosts(response.data.data));
        } 
    }

    const list = posts.map(
        (e) =>
            <div className={styles.item_list}>
                <div className={styles.desc__class}>
                    <h2>{e.title}</h2>
                    <p>{e.subtitle}</p>
                    <Link href={
                        {
                            pathname: '/web/class/[id]',
                            query: {id: e._id}
                        }
                    }>
                        <button className={styles.button}>ACESSAR CURSO</button>
                    </Link>
                    {/* { token && e.creator == 'luiz@gmail.com' && */}
                    { token && localStorage.getItem('userEmail') == e.creator &&
                        <button className={styles.button_delete} onClick={() => onDelete(e._id)}>APAGAR CURSO</button>
                    }
            </div>
                <div className={styles.img__class}>
                    <img src={e.imageFile} alt={e.name} />
                </div>
            </div>
    )

    return (
        <>
        <Head>
            <title>Aulas</title>
        </Head>
        <div className={styles.class}>
            <div className={styles.header__title}>
                <h1 className={styles.title}>Aulas</h1>
                <div className={styles.line__title}></div>
            </div>
            { token &&
                <div className={styles.header__class}>
                    <a href="/web/newClass"><button className={styles.button__new}>CRIAR CURSO</button></a>
                </div>
            }
            <div className={styles.list__class}>
                <ul>{list}</ul>
            </div>
            <footer className={styles.footer}>
                <h2>Desenvolvido por Luiz Claudio, Yaman Augusto, Gabriel Arthur, Douglas Figueroa</h2>
            </footer>
        </div>
        </>
    )
}
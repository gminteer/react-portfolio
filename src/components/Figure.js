import React, { useState, useEffect } from 'react';

import styles from './Figure.module.scss';

export default function Figure({ title, body, imgCfg }) {
  const [img, setImg] = useState();

  useEffect(() => {
    async function getImg() {
      const imgData = await import(`assets/img/${imgCfg.src}`);
      setImg(imgData.default);
    }
    getImg();
  }, [imgCfg.src, img]);

  return (
    <figure className={styles.Figure}>
      <img src={img} alt={imgCfg.alt} />
      <figcaption>
        <section className={styles.title}>{title}</section>
        <section className={styles.body}>{body}</section>
      </figcaption>
    </figure>
  );
}
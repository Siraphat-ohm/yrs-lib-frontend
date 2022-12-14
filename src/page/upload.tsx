import { useEffect, useRef, useState } from "react";
import instanceAxios from "../../config/baseAxios";
import styles from "../css/upload.module.css"

import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

function UploadPage() {

  const [file, setFile]:any = useState();

  function onSubmit(event:any){
    event.preventDefault()
    
    const formData = new FormData();
    let title : string = event.target.title.value;
    let category : string = event.target.category.value;
    let author : string = event.target.author.value;
    let edition : string = event.target.edition.value;
    let publication_year : string = event.target.publication_year.value;
    let page : string = event.target.page.value;
    let language : string = event.target.language.value;
    let detail : string = event.target.detail.value;
    let amount : string = event.target.amount.value;
    let ISBN : string = event.target.ISBN.value;

    formData.append("title", title);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("edition", edition);
    formData.append("publication_year", publication_year);
    formData.append("page", page);
    formData.append("language", language);
    formData.append("detail", detail);
    formData.append("amount", amount);
    formData.append("graphic", file);
    formData.append("ISBN", ISBN);

    instanceAxios.post('/upload', formData).then(() => {window.location.reload()})
  }


  return (
    <form className={styles.area} onSubmit={onSubmit} encType="multipart/form-data" method="POST" id="book-form">
      <div className={styles.flexbox}>
        <div className={styles.item}>
          <div className={styles.title}>
            <Form.Label> title </Form.Label>
            <Form.Control type="text" name="title"/>
          </div>
          <div className={styles.category}>
            <Form.Label> category </Form.Label>
            <Form.Control type="text" name="category"/>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.author}>
            <Form.Label> author </Form.Label>
            <Form.Control type="text" name="author"/>
          </div>
          <div className={styles.edition}>
            <Form.Label> edition </Form.Label>
            <Form.Control type="text" name="edition"/>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.publication_year}>
            <Form.Label> publication year</Form.Label>
            <Form.Control type="text" name="publication_year"/>
          </div>
          <div className={styles.ISBN}>
            <Form.Label> ISBN </Form.Label>
            <Form.Control type="text" name="ISBN"/>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.page}>
            <Form.Label> page </Form.Label>
            <Form.Control type="text" name="page"/>
          </div>
          <div className={styles.language}>
            <Form.Label> language </Form.Label>
            <Form.Control type="text" name="language"/>
          </div>
          <div className={styles.copies_own}>
            <Form.Label> copies own </Form.Label>
            <Form.Control type="text" name="amount"/>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.detail}>
            <Form.Label> detail </Form.Label>
            <Form.Control as='textarea' rows={3} name='detail'/>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.file}>
            <Form.Control type="file" onChange={(event:any) => {setFile(event.target.files[0])}}/>
          </div>
          <div className={styles.btn}>
            <Button type='submit' >submit</Button>
          </div>
        </div>

      </div>
    </form>
  )
}

export default UploadPage;
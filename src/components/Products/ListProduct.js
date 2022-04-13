import { UseProductListener } from "../config/firebase";
import styles from './index.module.css';

function ListProduct() {
  const collections = UseProductListener();



  return <> <div>
  List component
  <br />
  {/* {JSON.stringify(collections[1]?.data()['products'])} */}
  <br />
  <div></div>
  <div className={styles.container}>
    <div className={styles.baslik}>ürün id</div>
    <div className={styles.baslik}>ürün</div>
    <div className={styles.baslik}>açıklama</div>
  </div>
  {/* {collections !== null &&
    collections.map((item, index) => (
      <div key={index}>
        {item.brand}-{item.desc}-{item.id}
      </div>
    ))} */}
  {collections !== null &&
    collections.map((item, index) => (
      <div key={index} className={styles.list_item}>
        <div className={styles.item}>{item.id}</div>
        <div className={styles.item}>{item.brand}</div>
        <div className={styles.item}>{item.desc}</div>
      </div>
    ))}
</div></>;
}

export default ListProduct;

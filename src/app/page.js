import styles from './page.module.css'
import { supabase } from './supabaseClient'

export default async function Home() {
  const { data: products, error } = await supabase.from("products").select('*');

  return (
    <main className={styles.main}>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} -- {product.price}
        </li>
      ))}
    </main>
  )
}

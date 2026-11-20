import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { formatIDR } from '../lib/format'
import type { Product } from '../context/CartContext'

export default function ProductCard({product}:{product:Product}) { return <motion.article whileHover={{y:-3}} transition={{duration:.2}}><Link to={`/product/${product.slug}`} style={{color:'#171717',textDecoration:'none'}}><div style={{aspectRatio:'4/5',overflow:'hidden',background:'#eceae5'}}><img src={product.images[0]} alt={product.name} loading="lazy" style={{height:'100%',objectFit:'cover',transition:'transform .5s ease'}} onLoad={(e)=>e.currentTarget.style.transform='scale(1.01)'}/></div><div style={{padding:'14px 0'}}><div style={{display:'flex',justifyContent:'space-between',gap:'12px'}}><h3 style={{margin:0,fontSize:'14px',fontWeight:500}}>{product.name}</h3><div style={{fontSize:'13px'}}>{product.discount_price?<><del style={{color:'#777',marginRight:'6px'}}>{formatIDR(product.price)}</del>{formatIDR(product.discount_price)}</>:formatIDR(product.price)}</div></div><p style={{margin:'7px 0 0',color:'#777',fontSize:'12px'}}>{product.category}</p></div></Link></motion.article> }

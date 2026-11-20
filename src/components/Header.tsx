import { useState } from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header({onSearch}:{onSearch?:()=>void}) {
 const {count,setOpen}=useCart(); const [menu,setMenu]=useState(false)
 const close=()=>setMenu(false)
 return <>
  <div style={{background:'#171717',color:'#fff',textAlign:'center',padding:'8px 16px',fontSize:'11px',letterSpacing:'2px'}}>COMPLIMENTARY DELIVERY OVER RP 1.500.000</div>
  <header className="header-glass" style={{position:'sticky',top:0,zIndex:40,borderBottom:'1px solid #eae8e3'}}>
   <div className="container" style={{height:'72px',display:'grid',gridTemplateColumns:'1fr auto 1fr',alignItems:'center'}}>
    <button aria-label="Buka menu" onClick={()=>setMenu(true)} style={{border:0,background:'none',justifySelf:'start',minHeight:'44px',width:'44px',display:'flex',alignItems:'center'}}><Menu size={21}/></button>
    <Link to="/" onClick={close} style={{color:'#171717',textDecoration:'none',fontWeight:700,letterSpacing:'4px',fontSize:'15px'}}>KELOMPOK 6</Link>
    <div style={{justifySelf:'end',display:'flex',alignItems:'center',gap:'4px'}}>
     <button aria-label="Cari produk" onClick={onSearch} style={{border:0,background:'none',width:'44px',height:'44px'}}><Search size={20}/></button>
     <button aria-label="Buka keranjang" onClick={()=>setOpen(true)} style={{border:0,background:'none',width:'44px',height:'44px',position:'relative'}}><ShoppingBag size={20}/>{count>0&&<span style={{position:'absolute',top:'3px',right:'0',borderRadius:'20px',background:'#171717',color:'#fff',fontSize:'9px',minWidth:'17px',height:'17px',display:'grid',placeItems:'center'}}>{count}</span>}</button>
    </div>
   </div>
  </header>
  {menu&&<div role="dialog" aria-modal="true" style={{position:'fixed',inset:0,zIndex:60,background:'#f8f7f4',padding:'20px',height:'100dvh'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><b style={{letterSpacing:'3px'}}>KELOMPOK 6</b><button aria-label="Tutup menu" onClick={close} style={{width:'44px',height:'44px',border:0,background:'none'}}><X/></button></div>
   <nav style={{marginTop:'55px',display:'grid',gap:'24px'}}>{[['SHOP','/shop'],['COLLECTIONS','/shop'],['ABOUT','/about'],['CONTACT','/contact']].map(([label,to])=><Link key={to+label} onClick={close} to={to} style={{color:'#171717',textDecoration:'none',fontSize:'30px'}} className="serif">{label}</Link>)}</nav>
  </div>}
 </>
}

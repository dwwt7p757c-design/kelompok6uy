export type Product = import('../context/CartContext').Product

export const fallbackProducts: Product[] = [
  { id:'1', name:'The Atelier Jacket', slug:'atelier-jacket', description:'A structured lightweight jacket with a refined, understated silhouette.', price:1299000, discount_price:1099000, images:['https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85'], category:'Outerwear', stock:8, sizes:['S','M','L','XL'], colors:['Black','Stone'], featured:true, new_arrival:true },
  { id:'2', name:'Essential Linen Shirt', slug:'linen-shirt', description:'An effortless linen shirt crafted for warm, modern days.', price:749000, images:['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=85'], category:'Shirts', stock:12, sizes:['S','M','L','XL'], colors:['Ivory','Sage'], featured:true, new_arrival:true },
  { id:'3', name:'Column Trousers', slug:'column-trousers', description:'A clean tailored trouser with an elongated straight leg.', price:899000, images:['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85'], category:'Bottoms', stock:6, sizes:['S','M','L'], colors:['Black','Taupe'], featured:true },
  { id:'4', name:'Soft Form Bag', slug:'soft-form-bag', description:'A sculptural everyday bag with a subtle minimal profile.', price:1599000, images:['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85'], category:'Accessories', stock:4, sizes:['One Size'], colors:['Black','Sand'], featured:true, new_arrival:true }
]

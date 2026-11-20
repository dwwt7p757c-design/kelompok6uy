export const formatIDR = (value: number) => new Intl.NumberFormat('id-ID', { style:'currency', currency:'IDR', maximumFractionDigits:0 }).format(value)
export function whatsappUrl(message: string) { return `https://wa.me/6281957110305?text=${encodeURIComponent(message)}` }

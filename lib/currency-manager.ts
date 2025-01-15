export default function formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export function formatNumber(value: number) {
    return value.toLocaleString('en-US')
}
import { redirect } from '@/platform/navigation';
export default function CoinbaseSignIn(){ redirect((process.env.NEXT_PUBLIC_COINTRADE_URL || 'http://localhost:3002') + '/login'); }

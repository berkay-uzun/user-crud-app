'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewUserPage() {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        })

        if (res.ok) {
            router.push('/users')
        } else {
            alert('Kullanıcı eklenemedi!')
        }
    };

    return (
        <div className='max-w-md mx-auto mt-10'>
            <h1 className='text-2xl font-bold mb-6'>Yeni Kullanıcı Ekle</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                    type="text"
                    placeholder='İsim'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full p-2 border rounded'
                    required
                />
                <input
                    type="email"
                    placeholder='E-posta'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full p-2 border rounded'
                    required
                />
                <button
                    type='submit'
                    className='bg-green-600 text-white px-4 py-2 rounded'
                >
                    Kaydet
                </button>
            </form>
        </div>
    )
}
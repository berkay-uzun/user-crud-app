'use client'

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation'

export default function EditUserPage() {
    const router = useRouter();
    const params = useParams();
    const userId = params?.id as string;

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();

    useEffect(() => {
        if (!userId) return

        fetch(`/api/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setName(data.name)
                setEmail(data.email)
            })
            .catch(err => console.error('Kullanıcı çekilemedi.', err))
    }, [userId])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(`/api/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application-json' },
            body: JSON.stringify({ name, email })
        })

        if (res.ok) {
            router.push('/users')
        } else {
            alert('Güncelleme başarısız!')
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-6">Kullanıcıyı Güncelle</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="İsim"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="E-posta"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Güncelle
                </button>
            </form>
        </div>
    );
}
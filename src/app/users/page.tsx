'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

type User = {
    id: number;
    name: string;
    email: string;
    createdAt: string;
}

export default function UsersPage() {
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error("Kullanıcıları çekerken hata:", err))
    }, [])

    const handleDelete = async (id: number) => {
        const onay = confirm("Bu kullanıcıyı silmek istediğine emin misin?")
        if (!onay) return;

        await fetch(`/api/users/${id}`, { method: 'DELETE' });
        setUsers(users.filter(u => u.id !== id));
    }

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <button
                onClick={() => router.push(`/users/new`)}
                className="bg-green-600 text-white px-3 py-1 rounded mb-5 float-end"
            >
                Ekle
            </button>
            <h1 className="text-2xl font-bold mb-6">Kullanıcı Listesi</h1>

            {users.length === 0 ? (
                <p>Hiç kullanıcı bulunamadı.</p>
            ) : (
                <ul className="space-y-4">
                    {users.map(user => (
                        <li key={user.id} className="p-4 border rounded flex justify-between items-center">
                            <div>
                                <p><strong>Ad:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Tarih:</strong> {new Date(user.createdAt).toLocaleString()}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => router.push(`/users/edit/${user.id}`)}
                                    className="bg-blue-600 text-white px-3 py-1 rounded"
                                >
                                    Güncelle
                                </button>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                >
                                    Sil
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}
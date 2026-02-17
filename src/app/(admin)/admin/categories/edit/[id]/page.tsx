import React from 'react';
import CategoryForm from '@/components/admin/CategoryForm';
import { fetchCategories, fetchCategoryById } from '@/actions/category.actions';
import { notFound } from 'next/navigation';

export default async function EditCategoryPage({ params }: { params: { id: string } }) {
    const [category, categories] = await Promise.all([
        fetchCategoryById(params.id),
        fetchCategories()
    ]);

    if (!category) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Edit Category: {category.name}</h1>
            <CategoryForm category={category} categories={categories} />
        </div>
    );
}

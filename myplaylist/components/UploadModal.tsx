"use client";

import React, { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";


import { useUser } from "@/hooks/useUser";

import Modal from './Modal';
import useUploadModal from '@/hooks/useUploadModal.ts';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from './Input';


const UploadModal = () => {
    const [isLoading, setIsLoading] = useState();
    const uploadModal = useUploadModal();

    const { 
        register,handleSubmit,reset
    } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null,
        }
    })

    const onChange = (open: boolean) => {
        if(!open) {
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        //upload to supabase
    }

    return (
        <Modal
        title='Add a song'
        description='Upload an audio file' 
        isOpen={uploadModal.isOpen}
        onChange={onChange}
        >
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-y-4'
            >
                <Input 
                id="title"
                disabled={isLoading}
                {...register('title', {required: true})}  
                placeholder="Song title"
                />
                <Input 
                id="author"
                disabled={isLoading}
                {...register('author', {required: true})}  
                placeholder="Song Author"
                />
                <div>
                    <div className='pb-1'>
                        Select a song file
                    </div>
                    <Input 
                id='song'
                type='file'
                disabled={isLoading}
                {...register('song', {required: true})}  
              
                />
                </div>
            </form>
        </Modal>
    )
 
}

export default UploadModal;
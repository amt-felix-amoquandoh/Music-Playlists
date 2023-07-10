"use client";

import React, { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";


import { useUser } from "@/hooks/useUser";

import Modal from './Modal';
import useUploadModal from '@/hooks/useUploadModal.ts';
import { FieldValues, useForm } from 'react-hook-form';


const UploadModal = () => {
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
            //reset form
            uploadModal.onClose();
        }
    }

    return (
        <Modal
        title='Add a song'
        description='Upload an audio file' 
        isOpen={uploadModal.isOpen}
        onChange={onChange}
        >
            Form
        </Modal>
    )
 
}

export default UploadModal;
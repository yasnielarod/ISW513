import {useState} from 'react'

export const useModal = (initValue = false) => {
    const [isOpen, setIsOpen] = useState(initValue);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return [isOpen, openModal, closeModal];

}

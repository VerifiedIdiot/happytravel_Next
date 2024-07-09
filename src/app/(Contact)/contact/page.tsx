import { Metadata } from 'next';
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ContactIntroSection, ContactItemSection } from './_components/ContactSection';

export const metadata: Metadata = {
  title: 'SEARCH YOUR TOUR TO TRAVEL AROUND!',
  description: 'TOUR OF HAPPY TRAVEL',
};

const ContactPage = () => {

return (
    <>
    <ContactIntroSection/>
    <ContactItemSection/>
    </>
)
}

export default ContactPage;
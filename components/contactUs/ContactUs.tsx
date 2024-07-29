import useContactUs from "@/hooks/useContactUs";
import { ContactUs } from "@/interfaces/commonTypes";
import { message as response } from "antd";
import { useState } from "react";
import Load from "../Loader/Loader";

export function ContactUsPage() {
  const { mutate, isLoading } = useContactUs();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  function sendMessage() {
    const { name, email, message } = contact;
    if (!name) return response.error("Name cannot be empty");
    if (!email) return response.error("Email cannot be empty");
    if (!message) return response.error("Message cannot be empty");

    const payload: ContactUs = { name, email, message };
    mutate(payload, {
      onSuccess: () => {
        response.success("Message sent");
      },
      onError: () => {
        response.error("Message not sent");
      },
    });
  }

  return (
    <section className='tw-my-5'>
      <p className='tw-font-bold tw-text-lg md:tw-text-2xl tw-text-red-kwek100 tw-text-center'>
        Get in touch with our sales team
      </p>
      {isLoading && <Load />}
      <div className='tw-mt-3 tw-flex tw-flex-col tw-justify-center tw-items-center tw-px-4 md:tw-px-12 lg:tw-px-24 tw-py-2'>
        <label className='tw-block tw-font-medium tw-capitalize tw-mb-4 tw-w-full'>
          Your Name:
          <br />
          <input
            type='text'
            placeholder='Name'
            className='tw-rounded-md tw-bg-red-bg tw-w-full'
            value={contact.name}
            onChange={e => setContact(prev => ({ ...prev, name: e.target.value }))}
          />
        </label>
        <label className='tw-block tw-font-medium tw-capitalize tw-mb-4 tw-w-full'>
          Your Email Address:
          <br />
          <input
            type='email'
            placeholder='Email'
            className='tw-rounded-md tw-bg-red-bg tw-w-full'
            value={contact.email}
            onChange={e => setContact(prev => ({ ...prev, email: e.target.value }))}
          />
        </label>
        <label className='tw-block tw-font-medium tw-capitalize tw-mb-4 tw-w-full'>
          Message:
          <br />
          <textarea
            rows={7}
            cols={15}
            className='tw-rounded-md tw-bg-red-bg tw-w-full'
            value={contact.message}
            onChange={e => setContact(prev => ({ ...prev, message: e.target.value }))}
          ></textarea>
        </label>
        <button
          className='tw-p-3 tw-w-full tw-block tw-capitalize tw-text-white-100 tw-bg-red-kwek100 tw-rounded-md'
          onClick={sendMessage}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}

import React from 'react';

function ContactInfo() {
  return (
    <address id="contactUs" className=" flex flex-col justify-center items-start font-extralight min-w-[240px] not-italic">
      <p className="gap-2 self-stretch whitespace-nowrap">info@example.com</p>
      <p className="gap-2 self-stretch mt-8">+98 21 12345678</p>
      <p className="gap-2 self-stretch mt-8">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
    </address>
  );
}

export default ContactInfo;
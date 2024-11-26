import React from 'react';
import EmailSubscription from './EmailSubscription';
import ContactInfo from './ContactInfo';
import NavigationLinks from './NavigationLinks';
import Brand from './Brand';

function Footer() {
  return (
    <footer  className="flex overflow-hidden flex-col px-16 py-24 w-full bg-neutral-900 rounded-[56px_56px_0px_0px] max-md:px-5">
    <EmailSubscription/>
      <div className="flex flex-wrap gap-10 justify-between items-end mt-36 w-full text-3xl text-center text-neutral-300 max-md:mt-10 max-md:max-w-full">
     
      <NavigationLinks />
        <ContactInfo />
        
      </div>
      <Brand />
    </footer>
  );
}

export default Footer;
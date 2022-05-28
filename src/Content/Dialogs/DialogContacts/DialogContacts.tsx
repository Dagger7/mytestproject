import React from 'react';
import style from './DialogContacts.module.scss'
import DialogContact from "./DialogContact";

const DialogContacts = () => {
  return (
    <div className={style.dialogsListContainer}>
      <div className={style.contactsList}>
        <DialogContact
          avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png'}
          link={'1'}
          name={'Dmitry'}
        />
        <DialogContact
          avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png'}
          link={'2'}
          name={'Andrew'}
        />
        <DialogContact
          avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png'}
          link={'3'}
          name={'Alex'}
        />
        <DialogContact
          avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png'}
          link={'4'}
          name={'Vlad'}
        />
        <DialogContact
          avatar={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png'}
          link={'5'}
          name={'Sasha'}
        />
      </div>
    </div>
  );
};

export default DialogContacts;